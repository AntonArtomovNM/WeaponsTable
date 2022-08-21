import { Weapon } from 'src/app/models/weapon';
import { WeaponType } from '../enums/weaponType';
export class WeaponsPerType {
    type: WeaponType;
    displayName: string;
    isOpen: boolean;
    weapons: Weapon[];
    additionalInfo?: string;
}