/**
 * PreferenceDTO contains the icon name and a label to define the preferences of a paitent.
 */
class PreferenceDTO {
    constructor(label, iconName, category) {
        this.label = label;
        this.iconName = iconName;
        this.category = category;
    }

    toString() {
        return this.label + " " + this.iconName + " " + this.category;
    }
}

const preferenceConverter = {
    toFirestore(preference) {
        return {
            label: preference.label, iconName: preference.iconName,
            category: preference.category,
        };
    },
    fromFirestore(
        snapshot,
        options
    ) {
        const data = snapshot.data(options);
        return new PreferenceDTO(data.label, data.iconName, data.category);
    }
};
export { preferenceConverter };
export { PreferenceDTO}