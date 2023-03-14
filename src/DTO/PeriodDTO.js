/**
 * PeriodDTO contains the period properties and a converter from and to Firestore.
 */
class PeriodDTO {
    constructor(name, startDate, endDate, color) {
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.color = color;
    }

    toString() {
        return this.name + " " + this.startDate + " " + this.endDate + " " + this.color;
    }
}

const periodConverter = {
    toFirestore(period) {
        return {
            name: period.name, startDate: period.startDate,
            endDate: period.endDate, color: period.color
        };
    },
    fromFirestore(
        snapshot,
        options
    ) {
        const data = snapshot.data(options);
        return new PeriodDTO(data.name, data.startDate, data.endDate, data.color);
    }
};
export { periodConverter };
export { PeriodDTO }