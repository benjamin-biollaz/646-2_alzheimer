import { doc, getDocs, collection, withConverter, setDoc, addDoc } from "firebase/firestore";
import { db } from "./FirebaseConf";
import { periodConverter, PeriodDTO } from "../DTO/PeriodDTO";
import { PeriodWithId } from "../DTO/PeriodWithId";

class PeriodDAO {
    /**
     * Get all the periods of one timeline.
     * @param {The timeline document id} timelineId 
     * @returns A list of "TimelineWithId" instances 
     */
    async getPeriodsByTimelineId(timelineId) {
        // get the periods related to the timeline
        const periodsRef = collection(
            doc(
                collection(db, "Timelines"),
                timelineId),
            "Periods").withConverter(periodConverter);

        const docSnapshot = await getDocs(periodsRef);
        return docSnapshot.docs.map(e => new PeriodWithId(e.id, e.data()));
    }

    /**
     * Update the period in the database.
     * @param {The timeline document id} timelineId 
     * @param {The old period object} periodToChange 
     * @param {The new start date} newStartDate 
     * @param {The new end date} newEndDate 
     * @param {The new name} newName 
     * @returns nothing
     */
    async updatePeriod(timelineId, periodToChange, newStartDate, newEndDate, newName) {
        // access DB only if changes have been made 
        if (periodToChange.startDate === newStartDate && periodToChange.endDate === newEndDate
            && periodToChange.name === newName)
            return;

        const eventRef =
            doc(
                collection(
                    doc(collection(db, "Timelines"), timelineId),
                    "Periods")
                , periodToChange.id).withConverter(periodConverter);

        await setDoc(eventRef, new PeriodDTO(newName, newStartDate, newEndDate));
    }

    async addPeriod(timelineId, name, startDate, endDate) {
        const period = new PeriodDTO(name, startDate, endDate);

        // point to the document in db
        const periodRef = collection(
            doc(
                collection(db, "Timelines"),
                timelineId),
            "Periods").withConverter(periodConverter);

        // add to the document
        const docRef = await addDoc(periodRef, period);
        return docRef.id;
    }
}

export { PeriodDAO };