import { WeaponProperty } from './../../../models/weaponProperty';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WeaponPropertiesService } from 'src/app/services/weapon.properties.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../../common/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-weapon-prop-edit',
  templateUrl: './weapon-prop-edit.component.html',
  styleUrls: ['./weapon-prop-edit.component.less']
})
export class WeaponPropEditComponent {
  @Input() weaponProp: WeaponProperty;
  @Output() switchViewMode = new EventEmitter();

  updateWeaponProp: Function = (newWeaponProp: WeaponProperty) => {
    this.weaponPropService.updateWeaponProperty(newWeaponProp).subscribe(result => {
      this.switchViewMode.emit(result);
    });
  }

  deleteWeapon: Function = () => {
    this.dialog.open(DeleteDialogComponent, {
      width: '500px',
      data: {
        name: this.weaponProp.name, 
        type: "свойство",
        onDelete: () => {
          if (this.weaponProp.id) {
            this.weaponPropService.deleteWeaponProperty(this.weaponProp.id).subscribe()
          }
        },
      },
    });
  }

  constructor(
    public dialog: MatDialog,
    private weaponPropService: WeaponPropertiesService,
  ) {}

  switchMode(){
    this.switchViewMode.emit();
  }
}
