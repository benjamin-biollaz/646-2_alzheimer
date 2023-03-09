/**
 * EventWithId contains both the document id and the DTO object 
 * that can be sent to the database.
 */
class EventWithId {
    constructor (id, eventDTO) {
        this.id = id;
        this.eventDTO = eventDTO;
    }
}

export {EventWithId};