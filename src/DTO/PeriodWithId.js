/**
 * PeriodWithId contains both the Firestore document id and the DTO object that can be sent to the database.
 * This document id is needed in the program as a period doesn't have a unique identifier.
 */
class PeriodWithId {
    constructor(id, periodDTO) {
        this.id = id;
        this.periodDTO = periodDTO;
    }
}

export { PeriodWithId };