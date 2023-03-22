/**
 * PreferenceDTO contains the icon name and a label to define the preferences of a paitent.
 */
class PreferenceDTO {
    constructor(label, iconName) {
        this.label = label;
        this.iconName = iconName;
    }

    toString() {
        return this.label + " " + this.iconName;
    }
}

const preferenceConverter = {
    toFirestore(preference) {
        return {
            label: preference.label, iconName: preference.iconName,
        };
    },
    fromFirestore(
        snapshot,
        options
    ) {
        const data = snapshot.data(options);
        return new PreferenceDTO(data.label, data.iconName);
    }
};
export { preferenceConverter };
export { PreferenceDTO}