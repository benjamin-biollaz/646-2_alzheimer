import { doc, getDoc, setDoc, updateDoc, getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "./FirebaseConf";
import { preferenceConverter, PreferenceDTO } from "../DTO/PreferenceDTO";
import { PreferenceWithId } from "../DTO/PreferenceWithId";

class PreferenceDAO {

    /**
     * Get all the embedded preferences of a resident
     * @param {The resident id} residentId 
     * @returns All the resident preferences.
     */
    async getPreferencesByResidentId(residentId) {
        // point to the embedded preferences
        const preferencesRef = collection(
            doc(
                collection(db, "Residents"),
                residentId),
            "Preferences").withConverter(preferenceConverter);

        // retrieve them
        const docSnapshot = await getDocs(preferencesRef);
        return docSnapshot.docs.map(p => new PreferenceWithId(p.id, p.data()));
    }


    /**
     * Add a document to the "Preferences" collection embedded in the resident.
     * @param {The resident for which preferences are being added.} residentId 
     * @param {The label of the preference (e.g., vegetarian)} label 
     * @param {The icon name of the preference (e.g., "meat" for meat icon)} iconName 
     */
    async addPreference(residentId, label, iconName) {
        const preference = new PreferenceDTO(label, iconName);

        // point to the document in db
        const prefRef = collection(
            doc(
                collection(db, "Residents"),
                residentId),
            "Preferences").withConverter(preferenceConverter);

        // add the documents
        await addDoc(prefRef, preference);
    }

    /**
     * Update the preference. Access the database only if changes exist between
     * the preferenceToChange and the newPreferences.
     * @param {*} residentId 
     * @param {*} preferenceToChange 
     * @param {*} newPreference 
     * @returns 
     */
    async updatePreference(residentId, preferenceToChange, newPreference) {
        // access DB only if changes have been made 
        if (preferenceToChange.label === newPreference.label && preferenceToChange.iconName == preferenceToChange.iconName)
            return;

        const prefRef =
            doc(
                collection(
                    doc(collection(db, "Residents"), residentId),
                    "Preferences")
                , preferenceToChange.id).withConverter(preferenceConverter);

        await setDoc(prefRef, newPreference.preferenceDTO);
    }
}

export { PreferenceDAO };