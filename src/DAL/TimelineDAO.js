import {where, query, getDocs} from "firebase/firestore";
import { timelineRef } from "./FirebaseConf";
import { TimelineWithId } from "../DTO/TimelineWithId";

class TimelineDAO {

    async getTimelineByResidentId(residentId) {
        const q = query(timelineRef, where("residentId", "==", residentId));
        const snapshot = await getDocs(q);
        const doc = snapshot.docs[0];
        return new TimelineWithId(doc.id, doc.data());
    }
}

export {TimelineDAO};