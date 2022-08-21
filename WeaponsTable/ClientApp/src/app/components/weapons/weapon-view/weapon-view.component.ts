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

  getPriceString(price: Money): string {
    return Money.getValue(price);
  }

  getDamageString(): string {
    if (this.weapon.damage) {
      return `${this.weapon.damage.diceAmount}к${this.weapon.damage.diceType} ${this.weapon.damageTypes?.map(type => this.separateWords(DamageType[type])).join(', ') ?? ''}`;
    }

    return "--";
  }

  switchViewMode(updatedWeapon: Weapon | null = null) {
    this.isViewMode = !this.isViewMode;

    if (updatedWeapon){
      this.weapon = updatedWeapon;
    }
  }

  private separateWords(str: string): string {
    return str.replace(/([а-я])([А-Я])/g, '$1 $2');
  }
}
