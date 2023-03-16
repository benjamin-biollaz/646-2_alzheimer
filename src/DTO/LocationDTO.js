/**
 * LocationDTO contains the location properties and a converter from and to Firestore.
 */
class LocationDTO {
    constructor(startDate, endDate, name, color) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.name = name;
        this.color = color;
    }

    toString() {
        return this.startDate + " " + this.endDate + " " + this.name + " " + this.color;
    }
}

const locationConverter = {
    toFirestore(location) {
        return {
            startDate: location.startDate, endDate: location.endDate, name: location.name, color: location.color
        };
    },
    fromFirestore(
        snapshot,
        options
    ) {
        const data = snapshot.data(options);
        return new LocationDTO(data.startDate, data.endDate, data.name, data.color);
    }
};
export { locationConverter };
export { LocationDTO }