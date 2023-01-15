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
          return 'Рубаюча';
        }
        case DamageType.Piercing: {
          return 'Колюча';
        }
        case DamageType.Bludgeoning: {
          return 'Дробляча';
        }
        case DamageType.Poison: {
          return 'Отрутою';
        }
        case DamageType.Acid: {
          return 'Кислотою';
        }
        case DamageType.Fire: {
          return 'Вогнем';
        }
        case DamageType.Cold: {
          return 'Холодом';
        }
        case DamageType.Radiant: {
          return 'Випромінюванням';
        }
        case DamageType.Necrotic: {
          return 'Некротична';
        }
        case DamageType.Lightning: {
          return 'Блискавкою';
        }
        case DamageType.Thunder: {
          return 'Громом';
        }
        case DamageType.Force: {
          return 'Силовим полем';
        }
        case DamageType.Psychic: {
          return 'Психічна';
        }
        default: {
          return 'INVALID_VALUE';
        }
    }
}