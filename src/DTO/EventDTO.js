/**
 * EventDTO contains the event properties and a converter from and to Firestore.
 */
class EventDTO {
    constructor(date, name, color) {
        this.date = date;
        this.name = name;
        this.color = color;
    }

    toString() {
        return this.date + " " + this.name + " " + this.color;
    }
}

const eventConverter = {
    toFirestore(event) {
        return {
            date: event.date, name: event.name, color: event.color
        };
    },
    fromFirestore(
        snapshot,
        options
    ) {
        const data = snapshot.data(options);
        return new EventDTO(data.date, data.name, data.color);
    }
};
export { eventConverter };
export { EventDTO }