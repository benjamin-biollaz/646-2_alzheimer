import { where, query, getDocs, addDoc } from "firebase/firestore";
import { timelineRef } from "./FirebaseConf";
import { TimelineWithId } from "../DTO/TimelineWithId";
import { TimelineDTO } from "../DTO/TimelineDTO";

class TimelineDAO {

    async getTimelineByResidentId(residentId) {
        const q = query(timelineRef, where("residentId", "==", residentId));
        const snapshot = await getDocs(q);
        const doc = snapshot.docs[0];
        return new TimelineWithId(doc.id, doc.data());
    }
    async addTimeline(residentId) {
        const timeline = new TimelineDTO(residentId, "")
        await addDoc(timelineRef, timeline);
        //add period empty list
        
        
    }

}

export { TimelineDAO };