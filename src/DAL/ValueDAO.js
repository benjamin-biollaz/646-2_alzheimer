import { db } from "./FirebaseConf";
import { doc, updateDoc, getDocs, collection } from "firebase/firestore";
import { ValuesWithId } from "../DTO/ValuesWithId";
import { valueConverter } from "../DTO/ValueDTO"

class ValueDAO {

    /**
     * Add one or more value to the resident's list.
     * @param {} residentId 
     * @param {An array of firestore ids} valueId 
     */
    async assignValueToResident(residentId, valueIds) {
        const residentRef = doc(collection(db, "Residents"), residentId);
        await updateDoc(residentRef, {
            valueIds: valueIds
        });
    }

    /**
     * Get the values corresponding to the array of ids.
     * @param {An array of ids.} valuesIds 
     * @returns  a list of ValueWithId
     */
    async getValuesByIds(valuesIds) {
        //get all values
        const v = await getDocs(collection(db, "Values").withConverter(valueConverter));

        //filter them
        const docs = v.docs;
        const filtered = docs.filter(doc => valuesIds.includes(doc.id))
        return filtered.map(value => new ValuesWithId(value.id, value.data()))
    }

    /**
     * Get all values.
     * @returns an array of ValueWithId
     */
    async getAllValues() {
        const values = await getDocs(collection(db, "Values").withConverter(valueConverter));
        //return with id
        return values.docs.map((doc) => {
            return new ValuesWithId(doc.id, doc.data());
        });
    }
}

export { ValueDAO }


