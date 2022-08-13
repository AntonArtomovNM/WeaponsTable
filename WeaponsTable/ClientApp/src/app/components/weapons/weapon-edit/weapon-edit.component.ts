import { WeaponPropertyLink } from './../../../models/weaponPropertyLink';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Weapon } from 'src/app/models/weapon';
import { WeaponService } from 'src/app/services/weapon.service';
import { DeleteDialogComponent } from '../../common/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-weapon-edit',
  templateUrl: './weapon-edit.component.html',
  styleUrls: ['./weapon-edit.component.less']
})
export class WeaponEditComponent {
  @Input() weapon: Weapon;
  @Output() switchViewMode = new EventEmitter();

  updateWeapon: Function = (weapon: Weapon) => {
    this.weaponService.updateWeapon(weapon).subscribe(result => {
      const newweapon = {
        ...result,
        weaponProperties: weapon.weaponProperties
      } as Weapon

      this.switchViewMode.emit(newweapon);
    });
  }

  constructor(
    public dialog: MatDialog,
    private weaponService: WeaponService,
  ) {}

  switchMode(){
    this.switchViewMode.emit();
  }

  deleteWeapon(){
    this.dialog.open(DeleteDialogComponent, {
      width: '500px',
      data: {
        name: this.weapon.name, 
        type: "оружие",
        onDelete: () => {
          if (this.weapon.id) {
            this.weaponService.deleteWeapon(this.weapon.id).subscribe()
          }
        },
      },
    });

    this.switchMode();
  }
}
