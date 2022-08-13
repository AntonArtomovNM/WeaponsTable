import { Component, Input } from '@angular/core';
import { DamageType } from 'src/app/enums/damageType';
import { WeaponType } from 'src/app/enums/weaponType';
import { Money } from 'src/app/models/money';
import { Weapon } from 'src/app/models/weapon';

@Component({
  selector: 'app-weapon-view',
  templateUrl: './weapon-view.component.html',
  styleUrls: ['./weapon-view.component.less']
})
export class WeaponViewComponent {
  @Input() weapon: Weapon;
  
  isViewMode: boolean = true;

  constructor() { }

  getWeaponTypeDisplayName(value: WeaponType): string {
    return this.separateWords(WeaponType[value]);
  }

  getDamageTypeDisplayNames(values: DamageType[]): string {
    return values.map(value => this.separateWords(DamageType[value])).join(', ');
  }

  getPriceString(price: Money): string{
    return Money.getValue(price);
  }

  switchViewMode(updatedWeapon: Weapon | null = null){
    this.isViewMode = !this.isViewMode;

    if (updatedWeapon){
      this.weapon = updatedWeapon;
    }
  }

  private separateWords(str: string): string {
    return str.replace(/([а-я])([А-Я])/g, '$1 $2');
  }
}
