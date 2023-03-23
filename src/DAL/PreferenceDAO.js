import { doc, getDoc, setDoc, updateDoc, getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "./FirebaseConf";
import { preferenceConverter, PreferenceDTO } from "../DTO/PreferenceDTO";

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
            return docSnapshot.docs.map(p => p.data());
    }


    /**
     * Add a document to the "Preferences" collection embedded in the resident.
     * @param {The resident for which preferences are being added.} residentId 
     * @param {The label of the preference (e.g., vegetarian)} label 
     * @param {The icon name of the preference (e.g., "meat" for meat icon)} iconName 
     */
    async addPeriod(residentId, label, iconName) {
        const preference = new PreferenceDTO(label, iconName);

        // point to the document in db
        const residentRef = collection(
            doc(
                collection(db, "Residents"),
                residentId),
            "Preferences").withConverter(preferenceConverter);

        // add to the document
        await addDoc(residentRef, preference);
    }
}

export { PreferenceDAO };