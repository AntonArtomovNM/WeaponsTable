import { Pipe, PipeTransform } from '@angular/core';
import { Money } from '../models/money';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: Money, ...args: unknown[]): unknown {
    let price = "";

        if (value.pp > 0)
        {
          price += `${value.pp } пм. `;
        }

        if (value.gp > 0)
        {
          price += `${value.gp} зм. `;
        }

        if (value.sp > 0)
        {
          price += `${value.sp} см. `;
        }

        if (value.cp > 0)
        {
          price += `${value.cp} мм. `;
        }

        return price.length > 0 ? price : 'Можна лише створити';
  }

}
