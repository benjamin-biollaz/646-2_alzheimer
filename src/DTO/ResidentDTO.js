/**
 * ResidentDTO contains the resident properties and a converter from and to Firestore.
 */
class ResidentDTO {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    toString() {
        return this.firstName + " " + this.lastName;
    }
}

const residentConverter = {
    toFirestore(resident) {
        return {
            firstName: resident.firstName, lastName: resident.lastName
        };
    },
    fromFirestore(
        snapshot,
        options
    ) {
        const data = snapshot.data(options);
        return new ResidentDTO(data.firstName, data.lastName);
    }
};
export {residentConverter};
export {ResidentDTO}