import { getWeaponTypeDisplayName, WeaponType } from 'src/app/enums/weaponType';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weaponTypeName'
})
export class WeaponTypeNamePipe implements PipeTransform {

  transform(value: WeaponType, ...args: unknown[]): string {
    return getWeaponTypeDisplayName(value);
  }

}
