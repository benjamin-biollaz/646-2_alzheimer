import { IconManager } from "../../Utilities/IconManager";

describe('Get icon by name', () => {
    test('Get same icon by name', () => {
        const iconManager = new IconManager
        const icon1 = iconManager.getIconByName("Viande");
        const icon2 = iconManager.getIconByName("Viande");
        expect(icon1).toBe(icon2);
    });
    
    test('Get different icon by name ', () => {
        const iconManager = new IconManager
        const icon1 = iconManager.getIconByName("Viande");
        const icon2 = iconManager.getIconByName("Poisson");
        expect(icon1).not.toBe(icon2);
    });

    test('Get icon with no name ', () => {
        const iconManager = new IconManager
        const icon1 = iconManager.getIconByName("");
        expect(icon1).toBe(null);
    });
});

