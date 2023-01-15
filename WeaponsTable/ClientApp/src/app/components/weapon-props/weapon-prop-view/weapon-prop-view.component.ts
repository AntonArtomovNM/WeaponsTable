import { OperationType } from './../../../enums/operationType';
import { WeaponProperty } from './../../../models/weaponProperty';
import { Component, Input, OnInit } from '@angular/core';
import { WeaponPropertiesService } from 'src/app/services/weapon.properties.service';
import { MatDialog } from '@angular/material/dialog';
import { WeaponPropFormDialogComponent } from '../weapon-prop-form-dialog/weapon-prop-form-dialog.component';
import { DeleteDialogComponent } from '../../common/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-weapon-prop-view',
  templateUrl: './weapon-prop-view.component.html',
  styleUrls: ['./weapon-prop-view.component.less']
})
export class WeaponPropViewComponent implements OnInit {
  @Input() weaponProp: WeaponProperty;

  constructor(
    private readonly dialog: MatDialog,
    private readonly weaponPropService: WeaponPropertiesService,
  ) { }

  ngOnInit(): void {
  }
  
  editWeaponProp() {
    const dialogRef = this.dialog.open(WeaponPropFormDialogComponent, {
      width: '1000px',
      data: {model: this.weaponProp, operation: OperationType.Update}
    });

    dialogRef.afterClosed().subscribe(updatedProp => {
      if (updatedProp) {
        this.weaponPropService.updateWeaponProperty(updatedProp).subscribe();
      }
    });
  }

  deleteWeaponProp(){
    this.dialog.open(DeleteDialogComponent, {
      width: '500px',
      data: {
        name: this.weaponProp.name, 
        type: "властивість",
        onDelete: () => {
          if (this.weaponProp.id) {
            this.weaponPropService.deleteWeaponProperty(this.weaponProp.id).subscribe()
          }
        },
      },
    });
  }
}
