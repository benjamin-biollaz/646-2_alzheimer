/**
 * EventWithId contains both the Firestore document id and the DTO object that can be sent to the database.
 * This document id is needed in the program as an event doesn't have a unique identifier.
 */
class EventWithId {
    constructor (id, eventDTO) {
        this.id = id;
        this.eventDTO = eventDTO;
    }
}

export {EventWithId};