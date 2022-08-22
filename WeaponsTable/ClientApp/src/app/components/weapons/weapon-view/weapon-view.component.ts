import { Component, Input } from '@angular/core';
import { Weapon } from 'src/app/models/weapon';

@Component({
  selector: 'app-weapon-view',
  templateUrl: './weapon-view.component.html',
  styleUrls: ['./weapon-view.component.less']
})
export class WeaponViewComponent {
  @Input() weapon: Weapon;
  
  isViewMode: boolean = true;

  switchViewMode(updatedWeapon: Weapon | null = null) {
    this.isViewMode = !this.isViewMode;

    if (updatedWeapon){
      this.weapon = updatedWeapon;
    }
  }
}
