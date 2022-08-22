import { DamageType, getDamageTypeDisplayName } from 'src/app/enums/damageType';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'damageTypeName'
})
export class DamageTypeNamePipe implements PipeTransform {

  transform(value: DamageType, ...args: unknown[]): string {
    return getDamageTypeDisplayName(value);
  }

}
