export enum DamageType {
    Slashing = 1,
    Piercing = 2,
    Bludgeoning = 3,
    Poison = 4,
    Acid = 5,
    Fire = 6,
    Cold = 7,
    Radiant = 8,
    Necrotic = 9,
    Lightning = 10,
    Thunder = 11,
    Force = 12,
    Psychic = 13,
}

export function getDamageTypeDisplayName(value: DamageType) {
    switch (value) {
        case DamageType.Slashing: {
          return 'Рубящий';
        }
        case DamageType.Piercing: {
          return 'Колющий';
        }
        case DamageType.Bludgeoning: {
          return 'Дробящий';
        }
        case DamageType.Poison: {
          return 'Ядом';
        }
        case DamageType.Acid: {
          return 'Кислотой';
        }
        case DamageType.Fire: {
          return 'Огнём';
        }
        case DamageType.Cold: {
          return 'Холодом';
        }
        case DamageType.Radiant: {
          return 'Излучением';
        }
        case DamageType.Necrotic: {
          return 'Некротический';
        }
        case DamageType.Lightning: {
          return 'Молнией';
        }
        case DamageType.Thunder: {
          return 'Громом';
        }
        case DamageType.Force: {
          return 'Силой';
        }
        case DamageType.Psychic: {
          return 'Психический';
        }
        default: {
          return 'INVALID_VALUE';
        }
    }
}