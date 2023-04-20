import { db } from "./FirebaseConf";
import { doc, getDoc, updateDoc, getDocs, collection } from "firebase/firestore";
import {ReligionWithId} from "../DTO/ReligionWithId";

import {religionConverter} from "../DTO/ReligionDTO"

class ReligionDAO {

    /**
     * Assign a religion to a resident
     * @param {*} residentId 
     * @param {*} religionId 
     */
    async assignReligionToResident(residentId, religionId) {
        const residentRef = doc(collection(db, "Residents"), residentId);
        await updateDoc(residentRef, {
            religionId: religionId
        });
    }

    /**
     * Get a religion by its id
     * @param {*} religionId 
     * @returns a "ReligionWithId" object
     */
    async getReligionById(religionId) {
        const r = await getDoc(doc(db, "Religions", religionId).withConverter(religionConverter));
        return new ReligionWithId(r.id, r.data());
    }

    /**
     * Get all religions.
     * @returns a list of "ReligionsWithId" objets.
     */
    async getAllReligions() {
        const religions = await getDocs(collection(db, "Religions").withConverter(religionConverter));
        //return with id
        return religions.docs.map((doc) => {
            return new ReligionWithId(doc.id, doc.data());
        });
    }
}

export {ReligionDAO}


