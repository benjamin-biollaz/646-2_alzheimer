/**
 * EventDTO contains the event properties and a converter from and to Firestore.
 */
class EventDTO {
    constructor(startDate,endDate, name) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.name = name;
    }

    toString() {
        return this.startDate+" "+this.endDate+ " " + this.name;
    }
}

const eventConverter = {
    toFirestore(event) {
        return {
            startDate: event.startDate,endDate: event.endDate, name: event.name
        };
    },
    fromFirestore(
        snapshot,
        options
    ) {
        const data = snapshot.data(options);
        return new EventDTO(data.startDate,data.endDate, data.name);
    }
};
export { eventConverter };
export { EventDTO }