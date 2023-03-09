import { doc, getDocs, collection, withConverter } from "firebase/firestore";
import { db } from "./FirebaseConf";
import { eventConverter } from "../DTO/EventDTO";
import { EventWithId } from "../DTO/EventWithId";

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
        return docSnapshot.docs.map(e => new EventWithId(e.id, e.data()));
    }

    async updateEventBy(timelineId, eventId, date, name) {
        
    }

   
}

export { EventDAO };