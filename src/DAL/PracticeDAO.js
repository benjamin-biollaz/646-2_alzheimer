import { db } from "./FirebaseConf";
import { doc, updateDoc, getDocs, collection } from "firebase/firestore";
import { PracticeWithId } from "../DTO/PracticeWithId";

import { practiceConverter } from "../DTO/PracticeDTO"

class PracticeDAO {

    /**
     * Add one or more practice to the resident's list.
     * @param {} residentId 
     * @param {An array of firestore ids} valueId 
     */
    async assignPracticeToResident(residentId, practiceIds) {
        const residentRef = doc(collection(db, "Residents"), residentId);
        await updateDoc(residentRef, {
            practiceIds: practiceIds
        });
    }


    /**
     *  Get the practices corresponding to the array of ids.
     * @param {An array of ids} practicesIds 
     * @returns  a list of PracticesWithId instances.
     */
    async getPracticesByIds(practicesIds) {
        //get all practices
        const v = await getDocs(collection(db, "Practices").withConverter(practiceConverter));

        //filter them
        const docs = v.docs;
        const filtered = docs.filter(doc => practicesIds.includes(doc.id))
        return filtered.map(value => new PracticeWithId(value.id, value.data()))
    }

    /**
     * Get all the practices.
     * @returns a list of PracticeWithId instances.
     */
    async getAllPractices() {
        const practices = await getDocs(collection(db, "Practices").withConverter(practiceConverter));
        //return with id
        return practices.docs.map((doc) => {
            return new PracticeWithId(doc.id, doc.data());
        });
    }
}

export { PracticeDAO }


