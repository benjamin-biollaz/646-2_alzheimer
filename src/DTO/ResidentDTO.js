/**
 * ResidentDTO contains the resident properties and a converter from and to Firestore.
 */
class ResidentDTO {
    constructor(firstName, lastName, birthDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate
    }

    toString() {
        return this.firstName + " " + this.lastName + " " + this.birthDate;
    }
}

const residentConverter = {
    toFirestore(resident) {
        return {
            firstName: resident.firstName, lastName: resident.lastName, birthDate: resident.birthDate
        };
    },
    fromFirestore(
        snapshot,
        options
    ) {
        const data = snapshot.data(options);
        return new ResidentDTO(data.firstName, data.lastName, data.birthDate);
    }
};
export { residentConverter };
export { ResidentDTO }