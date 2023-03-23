import { doc, getDocs, collection, setDoc, addDoc } from "firebase/firestore";
import { db } from "./FirebaseConf";
import { eventConverter, EventDTO } from "../DTO/EventDTO";
import { EventWithId } from "../DTO/EventWithId";

class EventDAO {

    /**
     * Get all the events of a timeline.
     * @param {The timeline document id} timelineId 
     * @returns A list of "EventWithId" type.
     */
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

    /**
     * Update the event
     * @param {The timeline document id} timelineId 
     * @param {The old event, must be of type EventWithId.} eventToChange 
     * @param {New startDate} new startDate
     * @param {New endDate} new endDate 
     * @param {New name} new name 
     * @returns Nothing
     */
    async updateEvent(timelineId, eventToChange, startDate,endDate, name) {
        // access DB only if changes have been made 
        if (eventToChange.startDate === startDate && eventToChange.name === name && eventToChange.endDate === endDate)
            return;

        const eventRef =
            doc(
                collection(
                    doc(collection(db, "Timelines"), timelineId),
                    "Events")
                , eventToChange.id).withConverter(eventConverter);

        await setDoc(eventRef, new EventDTO(startDate,endDate,name));
    }

    async addEvent(timelineId, startDate,endDate, name) {
        const event = new EventDTO(startDate,endDate, name)

        // point to the document in db
        const eventRef =
            collection(
                doc(
                    collection(db, "Timelines"),
                    timelineId),
                "Events").withConverter(eventConverter);

        // add to the document
        await addDoc(eventRef, event);
    }

}

export { EventDAO };