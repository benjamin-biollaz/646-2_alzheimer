/**
 * ReligionDTO contains the religion properties and a converter from and to Firestore.
 */
class ReligionDTO {
    constructor(name) {
        this.name = name;
    }

    toString() {
        return this.name;
    }
}

const religionConverter = {
    toFirestore(event) {
        return {
            name: event.name
        };
    },
    fromFirestore(
        snapshot,
        options
    ) {
        const data = snapshot.data(options);
        return new ReligionDTO(data.name);
    }
};
export { religionConverter };
export { ReligionDTO }