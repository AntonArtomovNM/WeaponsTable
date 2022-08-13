import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Weapon } from 'src/app/models/weapon';
import { WeaponService } from 'src/app/services/weapon.service';

@Component({
  selector: 'app-weapon-add-dialog',
  templateUrl: './weapon-add-dialog.component.html',
  styleUrls: ['./weapon-add-dialog.component.less']
})
export class WeaponAddDialogComponent {
  addWeapon: Function = (weapon: Weapon) => {
    this.weaponService.createWeapon(weapon).subscribe(_ => {
      this.closeDialog();
    });
  }

  constructor(
    public dialogRef: MatDialogRef<WeaponAddDialogComponent>,
    private weaponService: WeaponService,
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
