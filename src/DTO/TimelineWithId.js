/**
 * TimelineWithId contains both the document id and the DTO object 
 * that can be sent to the database.
 */
class TimelineWithId {
    constructor (id, timelineDTO) {
        this.id = id;
        this.timelineDTO = timelineDTO;
    }
}

export {TimelineWithId};