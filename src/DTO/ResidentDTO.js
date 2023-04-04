/**
 * ResidentDTO contains the resident properties and a converter from and to Firestore.
 */
class ResidentDTO {
    constructor(firstName, lastName, birthDate,
        religionInputted, valuesInputted, practicesInputted,
        religionId, valueIds, practiceIds) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate

        //inputted by the nurse
        this.religionInputted = religionInputted;
        this.valuesInputted = valuesInputted;
        this.practicesInputted = practicesInputted;

        //references
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
    toFirestore(res) {
        return {
            firstName: res.firstName, lastName: res.lastName, birthDate: res.birthDate,
            religionInputted: res.religionInputted, valuesInputted: res.valuesInputted, practicesInputted: res.practicesInputted,
            religionId: res.religionId, valueIds: res.valueIds, practiceIds: res.practiceIds
        };
    },
    fromFirestore(
        snapshot,
        options
    ) {
        const data = snapshot.data(options);
        return new ResidentDTO(data.firstName, data.lastName, data.birthDate,
            data.religionInputted, data.valuesInputted, data.practicesInputted,
            data.religionId, data.valueIds, data.practiceIds);
    }
};
export { residentConverter };
export { ResidentDTO }