/**
 * ValuesWithId contains both the Firestore document id and the DTO object that can be sent to the database.
 * This document id is needed in the program as an event doesn't have a unique identifier.
 */
class ValuesWithId {
    constructor(id, valueDTO) {
        this.id = id;
        this.valueDTO = valueDTO;
    }
}

export { ValuesWithId };