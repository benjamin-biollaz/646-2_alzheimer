import { doc, getDoc, setDoc, updateDoc, getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "./FirebaseConf";
import { residentConverter } from "../DTO/ResidentDTO";
import { TimelineDAO } from "./TimelineDAO";

class ResidentDAO {


    async getresidentById(residentId) {
        const r = await getDoc(doc(db, "Residents", residentId).withConverter(residentConverter));
        return r.data();
    }
    async getResidents(residentsId) {
        const residents = [];
        for (const resId of residentsId) {
            const resDoc = await getDoc(doc(db, "Residents", resId).withConverter(residentConverter))
            residents.push({ id: resDoc.id, ...resDoc.data() })
        }
        return residents;
    }
    async addResident(resident) {
        const residentRef = collection(db, "Residents").withConverter(residentConverter);
        const r = await addDoc(residentRef, resident);
        const timelineDAO = new TimelineDAO();
        timelineDAO.addTimeline(r.id);
        return r
    }
}

export { ResidentDAO };