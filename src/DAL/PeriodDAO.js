import { doc, getDocs, collection, withConverter } from "firebase/firestore";
import { db } from "./FirebaseConf";
import { periodConverter } from "../DTO/PeriodDTO";

class PeriodDAO {
    async getPeriodsByTimelineId(timelineId) {
        // get the periods related to the timeline
        const periodsRef = collection(
            doc(
                collection(db, "Timelines"),
                timelineId),
            "Periods").withConverter(periodConverter);

        const docSnapshot = await getDocs(periodsRef);
        return docSnapshot.docs.map(e => e.data());
    }
}

export { PeriodDAO };