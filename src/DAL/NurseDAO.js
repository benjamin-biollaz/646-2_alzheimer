import { doc, getDoc } from "firebase/firestore";
import { db } from "./FirebaseConf";
import { nurseConverter } from "../DTO/NurseDTO";

class NurseDAO {

    async getNurseById(nurseId) {
        const e = await getDoc(doc(db, "Nurses", nurseId).withConverter(nurseConverter));
        return e.data();
    }

}

export { NurseDAO };