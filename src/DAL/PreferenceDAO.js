import { doc, getDoc, setDoc, updateDoc, getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "./FirebaseConf";
import { preferenceConverter } from "../DTO/PreferenceDTO";

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
}

export { PreferenceDAO };