import { Dice } from './../models/dice';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'weaponDamage'
})
export class WeaponDamagePipe implements PipeTransform {

  transform(value: Dice, ...args: unknown[]): unknown {
    if (!value) {
      return "--";
    }
    
    return `${value.diceAmount}к${value.diceType}`;
  }

}
