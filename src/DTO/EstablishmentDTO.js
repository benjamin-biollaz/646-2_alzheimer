/**
 * EstablishmentDTO contains the establishment properties and a converter from and to Firestore.
 */
class EstablishmentDTO {
    constructor(name, residentsId, nursesId) {
        this.name = name;
        this.residentsId = residentsId;
        this.nursesId = nursesId;
    }

    toString() {
        return this.name + " " + this.residentsId + " " + this.nursesId;
    }
}

const establishmentConverter = {
    toFirestore(establishment) {
        return {
            name: establishment.name, residentsId: establishment.residentsId,
            nursesId: establishment.nursesId
        };
    },
    fromFirestore(
        snapshot,
        options
    ) {
        const data = snapshot.data(options);
        return new EstablishmentDTO(data.name, data.residentsId, data.nursesId);
    }
};
export { establishmentConverter };
export { EstablishmentDTO }