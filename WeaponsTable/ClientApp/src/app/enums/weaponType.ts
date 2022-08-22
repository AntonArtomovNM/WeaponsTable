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
            return 'Простое Рукопашное';
        }
        case WeaponType.SimpleRange: {
            return 'Простое Дальнобойное';
        }
        case WeaponType.MartialMelee: {
            return 'Воинское Рукопашное';
        }
        case WeaponType.MartialRange: {
            return 'Воинское Дальнобойное';
        }
        case WeaponType.Firearm: {
            return 'Огнестрельное';
        }
    }
}