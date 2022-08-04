import { WeaponType } from "../enums/weaponType";
import { Money } from "./money";
import { WeaponDamage } from "./weaponDamage";
import { WeaponPropertyLink } from "./weaponPropertyLink";

export class Weapon {
    id?: string;
    name: string;
    damage: WeaponDamage;
    weaponType: WeaponType;
    price: Money;
    weight: number;
    description?: string;
    weaponProperties?: WeaponPropertyLink[];
}