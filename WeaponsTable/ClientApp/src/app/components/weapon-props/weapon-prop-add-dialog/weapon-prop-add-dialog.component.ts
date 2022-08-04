import { WeaponProperty } from '../../../models/weaponProperty';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { WeaponPropertiesService } from 'src/app/services/weapon.properties.service';

@Component({
  selector: 'app-weapon-prop-add-dialog',
  templateUrl: './weapon-prop-add-dialog.component.html',
  styleUrls: ['./weapon-prop-add-dialog.component.less']
})
export class WeaponPropAddDialogComponent {
  addWeaponProp: Function = (weaponProp: WeaponProperty) => {
    this.weaponPropService.createWeaponProperty(weaponProp).subscribe(_ => {
      this.closeDialog();
    });
  }

  constructor(
    public dialogRef: MatDialogRef<WeaponPropAddDialogComponent>,
    private weaponPropService: WeaponPropertiesService,
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
