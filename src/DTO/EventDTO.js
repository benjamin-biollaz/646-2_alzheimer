/**
 * EventDTO contains the event properties and a converter from and to Firestore.
 */
class EventDTO {
    constructor(date, name) {
        this.date = date;
        this.name = name;
    }

    toString() {
        return this.date + " " + this.name;
    }
}

const eventConverter = {
    toFirestore(event) {
        return {
            date: event.date, name: event.name
        };
    },
    fromFirestore(
        snapshot,
        options
    ) {
        const data = snapshot.data(options);
        return new EventDTO(data.date, data.name);
    }
};
export { eventConverter };
export { EventDTO }