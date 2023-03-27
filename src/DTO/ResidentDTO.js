/**
 * ResidentDTO contains the resident properties and a converter from and to Firestore.
 */
class ResidentDTO {
    constructor(firstName, lastName, birthDate, religionId, valueIds, practiceIds) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate
        this.religionId = religionId;
        this.valueIds = valueIds;
        this.practiceIds = practiceIds;
    }

    toString() {
        return this.firstName + " " + this.lastName + " " + this.birthDate + " " + this.religionId
            + " " + this.valueIds + " " + this.practiceIds;
    }
}

const residentConverter = {
    toFirestore(resident) {
        return {
            firstName: resident.firstName, lastName: resident.lastName, birthDate: resident.birthDate,
            religionId: resident.religionId, valueIds: resident.valueIds, practiceIds: resident.practiceIds
        };
    },
    fromFirestore(
        snapshot,
        options
    ) {
        const data = snapshot.data(options);
        return new ResidentDTO(data.firstName, data.lastName, data.birthDate, data.religionId, data.valueIds,
            data.practiceIds);
    }
};
export { residentConverter };
export { ResidentDTO }