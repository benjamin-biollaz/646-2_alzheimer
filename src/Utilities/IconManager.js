import { iconSets } from "../Presentation/Components/IconPopup/IconPicker";

export class IconManager {

    getIconByName = (iconName) => {
        for (const category of iconSets) {
          for (const icons of category.icons) {
            if (icons.name === iconName) return icons;
          }
        }
        return null;
      };

}