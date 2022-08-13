import { WeaponType } from "../enums/weaponType";
import { Money } from "./money";
import { Dice } from "./dice";
import { WeaponPropertyLink } from "./weaponPropertyLink";
import { DamageType } from "../enums/damageType";

export class Weapon {
    id?: string;
    name: string;
    weaponType: WeaponType;
    price: Money;
    weight: number;
    description?: string;
    damage: Dice;
    damageTypes: DamageType[];
    weaponProperties?: WeaponPropertyLink[];
}