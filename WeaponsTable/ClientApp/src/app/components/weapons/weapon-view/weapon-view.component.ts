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
    return WeaponType[value].replace(/([а-я])([А-Я])/g, '$1 $2')
  }

  getDamageTypeDisplayName(value: DamageType): string {
    return DamageType[value].replace(/([а-я])([А-Я])/g, '$1 $2')
  }

  getPriceString(price: Money): string{
    return Money.getValue(price)
  }

  switchViewMode(updatedWeapon: Weapon | null = null){
    this.isViewMode = !this.isViewMode;

    if (updatedWeapon){
      this.weapon = updatedWeapon;
    }
  }
}
