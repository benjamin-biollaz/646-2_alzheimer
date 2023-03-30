/**
 * ValueDTO contains the value properties and a converter from and to Firestore.
 */
class ValueDTO {
    constructor(name) {
        this.name = name;
    }

    toString() {
        return this.name;
    }
}

const valueConverter = {
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
        return new ValueDTO(data.name);
    }
};
export { valueConverter };
export { ValueDTO }