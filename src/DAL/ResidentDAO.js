import { doc, getDoc, setDoc, updateDoc, getDocs, collection } from "firebase/firestore";
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
}

export { ResidentDAO };