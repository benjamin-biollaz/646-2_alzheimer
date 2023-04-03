/**
 * NurseDTO contains the nurse properties and a converter from and to Firestore.
 */
class NurseDTO {
    constructor(establishmentId) {
        this.establishmentId = establishmentId;
    }

    toString() {
        return this.establishmentId;
    }
}

const nurseConverter = {
    toFirestore(establishment) {
        return {
            establishmentId: establishment.establishmentId
        };
    },
    fromFirestore(
        snapshot,
        options
    ) {
        const data = snapshot.data(options);
        return new NurseDTO(data.establishmentId);
    }
};
export { nurseConverter };
export { NurseDTO }