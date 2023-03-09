/**
 * PeriodWithId contains both the document id and the DTO object 
 * that can be sent to the database.
 */
class PeriodWithId {
    constructor (id, periodDTO) {
        this.id = id;
        this.periodDTO = periodDTO;
    }
}

export {PeriodWithId};