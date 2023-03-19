import { doc, getDoc, setDoc, updateDoc, getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "./FirebaseConf";
import { residentConverter } from "../DTO/ResidentDTO";

class ResidentDAO {

    async getresidentById(residentId) {
        const r = await getDoc(doc(db, "Residents", residentId).withConverter(residentConverter));
        return r.data();
    }
    async getResidents() {
        const residents = await getDocs(collection(db, "Residents").withConverter(residentConverter));
        //return with id
        return residents.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
        });
    }
    async addResident(resident) {
        const residentRef = collection(db, "Residents").withConverter(residentConverter);
         const r = await addDoc(residentRef, resident);
         return r
    }
}

export { ResidentDAO };