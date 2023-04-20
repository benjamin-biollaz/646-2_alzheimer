/**
 * PreferenceWithId contains both the Firestore document id and the DTO object that can be sent to the database.
 * This document id is needed in the program as an event doesn't have a unique identifier.
 */
class PreferenceWithId {
    constructor(id, preferenceDTO) {
        this.id = id;
        this.preferenceDTO = preferenceDTO;
    }
}

export { PreferenceWithId }