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

  updateWeapon: Function = (newWeapon: Weapon) => {
    this.weaponService.updateWeapon(newWeapon).subscribe(result => {
      this.switchViewMode.emit(result);
    });
  }

  deleteWeapon: Function = () => {
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
  }

  constructor(
    public dialog: MatDialog,
    private weaponService: WeaponService,
  ) {}

  switchMode(){
    this.switchViewMode.emit();
  }
}
