import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./FirebaseConf";
import { residentConverter } from "../DTO/ResidentDTO";

class ResidentDAO {

    async getresidentById(residentId) {
        const r = await getDoc(doc(db, "Residents", residentId).withConverter(residentConverter));
        return r.data();
    }
}

export { ResidentDAO };