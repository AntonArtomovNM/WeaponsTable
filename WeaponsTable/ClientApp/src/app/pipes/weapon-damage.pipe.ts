import { Pipe, PipeTransform } from '@angular/core';
import { getDamageTypeDisplayName } from '../enums/damageType';
import { Weapon } from '../models/weapon';

@Pipe({
  name: 'weaponDamage'
})
export class WeaponDamagePipe implements PipeTransform {

  transform(value: Weapon, ...args: unknown[]): unknown {
    if (!value?.damage) {
      return "--";
    }
    
    return `${value.damage.diceAmount}к${value.damage.diceType} ${value.damageTypes?.map(type => getDamageTypeDisplayName(type)).join(', ') ?? ''}`;
  }

}
