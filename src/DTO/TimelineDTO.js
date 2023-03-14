/**
 * TimelineDTO contains the timeline properties and a converter from and to Firestore.
 */
class TimelineDTO {
    constructor(residentId, remark) {
        this.residentId = residentId;
        this.remark = remark;
    }

    toString() {
        return this.residentId + " " + this.remark;
    }
}

const timelineConverter = {
    toFirestore(timeline) {
        return {
            residentId: timeline.residentId, remark: timeline.remark, 
        };
    },
    fromFirestore(
        snapshot,
        options
    ) {
        const data = snapshot.data(options);
        return new TimelineDTO(data.residentId, data.remark);
    }
};
export {timelineConverter};
export {TimelineDTO}