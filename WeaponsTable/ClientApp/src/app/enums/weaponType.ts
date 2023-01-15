export enum WeaponType {
    SimpleMelee = 1,
    SimpleRange = 2,
    MartialMelee = 10,
    MartialRange = 11,
    Firearm = 20,
}

export function getWeaponTypeDisplayName(value: WeaponType){
    switch(value) {
        case WeaponType.SimpleMelee: {
            return 'Проста Рукопашна';
        }
        case WeaponType.SimpleRange: {
            return 'Проста Дальнобійна';
        }
        case WeaponType.MartialMelee: {
            return 'Військова Рукопашна';
        }
        case WeaponType.MartialRange: {
            return 'Військова Дальнобійна';
        }
        case WeaponType.Firearm: {
            return 'Вогнепальна';
        }
    }
}