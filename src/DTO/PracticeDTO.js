/**
 * PracticeDTO contains the practices properties and a converter from and to Firestore.
 */
class PracticeDTO {
    constructor(name) {
        this.name = name;
    }

    toString() {
        return this.name;
    }
}

const practiceConverter = {
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
        return new PracticeDTO(data.name);
    }
};
export { practiceConverter };
export { PracticeDTO }