import { doc, getDocs, collection, setDoc, addDoc, deleteDoc } from "firebase/firestore";
import { db } from "./FirebaseConf";
import { locationConverter, LocationDTO } from "../DTO/LocationDTO";
import { LocationWithId } from "../DTO/LocationWithId";

class LocationDAO {

    /**
     * Get all the locations of a timeline.
     * @param {The timeline document id} timelineId 
     * @returns A list of "LocationWithId" type.
     */
    async getLocationsByTimelineId(timelineId) {
        // get the locations related to the timeline
        const locationRef =
            collection(
                doc(
                    collection(db, "Timelines"),
                    timelineId),
                "Locations").withConverter(locationConverter);

        const docSnapshot = await getDocs(locationRef);
        return docSnapshot.docs.map(e => new LocationWithId(e.id, e.data()));
    }

    /**
 * Update the location in the database.
 * @param {The timeline document id} timelineId 
 * @param {The old location object} locationToChange 
 * @param {The new start date} newStartDate 
 * @param {The new end date} newEndDate 
 * @param {The new name} newName 
 * @returns nothing
 */
    async updateLocation(timelineId, locationToChange, newStartDate, newEndDate, newName) {
        // access DB only if changes have been made 
        if (locationToChange.startDate === newStartDate && locationToChange.endDate === newEndDate
            && locationToChange.name === newName)
            return;

        // point to the document in db
        const locationRef =
            doc(
                collection(
                    doc(collection(db, "Timelines"), timelineId),
                    "Locations")
                , locationToChange.id).withConverter(locationConverter);

        // update document
        await setDoc(locationRef, new LocationDTO(newStartDate, newEndDate, newName));
    }

    async addLocation(timelineId, startDate, endDate, name) {
        const location = new LocationDTO(startDate, endDate, name);

        // point to the document in db
        const locationRef =
            collection(
                doc(
                    collection(db, "Timelines"),
                    timelineId),
                "Locations").withConverter(locationConverter);

        // add to the document
        const docRef = await addDoc(locationRef, location);
        return docRef.id;
    }

    /**
     * Delete an event by id.
     * @param {The timeline document id} timelineId 
     * @param {The location id to delete} locationId 
     * @returns Nothing
     */
    async deleteLocation(timelineId, locationId) {
        const locationRef =
            doc(
                collection(
                    doc(collection(db, "Timelines"), timelineId),
                    "Locations")
                , locationId);

        await deleteDoc(locationRef);
    }

}

export { LocationDAO };