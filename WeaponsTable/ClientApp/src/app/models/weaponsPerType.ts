import { Weapon } from 'src/app/models/weapon';
import { WeaponType } from '../enums/weaponType';
export class WeaponsPerType {
    type: WeaponType;
    isOpen: boolean;
    weapons: Weapon[];
    additionalInfo?: string;
}