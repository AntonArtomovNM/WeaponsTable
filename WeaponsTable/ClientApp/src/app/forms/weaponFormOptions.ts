import { DamageType } from 'src/app/enums/damageType';
import { WeaponType } from 'src/app/enums/weaponType';

export const weaponTypeOptions = [
  WeaponType.SimpleMelee,
  WeaponType.SimpleRange,
  WeaponType.MartialMelee,
  WeaponType.MartialRange,
  WeaponType.Firearm,
]

export const damageTypeOptions = [
  DamageType.Slashing,
  DamageType.Piercing,
  DamageType.Bludgeoning,
  DamageType.Fire,
]

export const diceOptions = [
  {
    label: "--"
  },
  {
    value: 4,
    label: "к4"
  },
  {
    value: 6,
    label: "к6"
  },
  {
    value: 8,
    label: "к8"
  },
  {
    value: 10,
    label: "к10"
  },
  {
    value: 12,
    label: "к12"
  },
]