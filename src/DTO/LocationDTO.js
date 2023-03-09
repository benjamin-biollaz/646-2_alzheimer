/**
 * LocationDTO contains the location properties and a converter from and to Firestore.
 */
class LocationDTO {
    constructor(startDate, endDate, name) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.name = name;
    }

    toString() {
        return this.startDate + " " + this.endDate + " " + this.name;
    }
}

const locationConverter = {
    toFirestore(location) {
        return {
            startDate: location.startDate, endDate: location.endDate, name: location.name
        };
    },
    fromFirestore(
        snapshot,
        options
    ) {
        const data = snapshot.data(options);
        return new LocationDTO(data.startDate, data.endDate, data.name);
    }
};
export {locationConverter};
export {LocationDTO}