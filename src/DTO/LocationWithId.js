/**
 * LocationWithId contains both the Firestore document id and the DTO object that can be sent to the database.
 * This document id is needed in the program as a location doesn't have a unique identifier.
 */
class LocationWithId {
    constructor(id, locationDTO) {
        this.id = id;
        this.locationDTO = locationDTO;
    }
}

export { LocationWithId };