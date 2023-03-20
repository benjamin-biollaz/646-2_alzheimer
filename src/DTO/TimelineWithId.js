/**
 * TimelineWithId contains both the Firestore document id and the DTO object that can be sent to the database.
 * This document id is needed because it has several subcollections.
 */
class TimelineWithId {
    constructor(id, timelineDTO) {
        this.id = id;
        this.timelineDTO = timelineDTO;
    }
}

export { TimelineWithId };