import { DamageType, getDamageTypeDisplayName } from './../enums/damageType';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weaponDamageTypes'
})
export class WeaponDamageTypesPipe implements PipeTransform {

  transform(value: DamageType[], ...args: unknown[]): string {
    return value?.map(type => getDamageTypeDisplayName(type)).join(', ') ?? '';
  }

}
