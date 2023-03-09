/**
 * PeriodDTO contains the period properties and a converter from and to Firestore.
 */
class PeriodDTO {
    constructor(name, location, startDate, endDate) {
        this.name = name;
        this.location = location;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    toString() {
        return this.name + " " + this.location + " " + this.startDate + " " + this.endDate;
    }
}

const periodConverter = {
    toFirestore(period) {
        return {
            name: period.name, location: period.location, 
            startDate: period.startDate, endDate: period.endDate
        };
    },
    fromFirestore(
        snapshot,
        options
    ) {
        const data = snapshot.data(options);
        return new PeriodDTO(data.name, data.location, data.startDate, data.endDate);
    }
};
export {periodConverter};
export {PeriodDTO}