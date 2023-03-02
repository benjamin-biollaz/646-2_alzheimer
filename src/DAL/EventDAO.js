import { doc, getDocs, collection, withConverter } from "firebase/firestore";
import { db } from "./FirebaseConf";
import { eventConverter } from "../DTO/EventDTO";

class EventDAO {
    async getEventsByTimelineId(timelineId) {
        // get the events related to the timeline
        const eventsRef =
            collection(
                doc(
                    collection(db, "Timelines"),
                    timelineId),
                "Events").withConverter(eventConverter);

        const docSnapshot = await getDocs(eventsRef);
        return docSnapshot.docs.map(e => e.data());
    }
}

export { EventDAO };