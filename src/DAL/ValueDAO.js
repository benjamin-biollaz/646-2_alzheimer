import { db } from "./FirebaseConf";
import { doc, getDoc, setDoc, updateDoc, getDocs, collection } from "firebase/firestore";
import {ValuesWithId} from "../DTO/ValuesWithId";

import {valueConverter} from "../DTO/ValueDTO"

class ValueDAO {

  
    async assignValueToResident(residentId, valueId) {
        const residentRef = doc(collection(db, "Residents"), residentId);
        await updateDoc(residentRef, {
            valuesIds: religionId
        });
    }

    async addPatientToDoctor(doctorId, patientId) {
        await updateDoc(doc(db, "Doctor", doctorId), {Patients: arrayUnion(patientId)});
    }

 
    async getValuesByIds(valuesIds) {
        const v = await getDocs((db, "Values").withConverter(valueConverter));
        return new ReligionWithId(v.id, v.data());
    }

    async getAllValues() {
        const values = await getDocs(collection(db, "Values").withConverter(valueConverter));
        //return with id
        return values.docs.map((doc) => {
            return new ValuesWithId(doc.id, doc.data());
        });
    }
}

export {ValueDAO as ReligionDAO}


