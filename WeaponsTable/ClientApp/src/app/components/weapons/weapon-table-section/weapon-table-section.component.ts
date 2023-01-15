import { OperationType } from './../../../enums/operationType';
import { WeaponsPerType } from 'src/app/models/weaponsPerType';
import { Component, Input } from '@angular/core';
import { Weapon } from 'src/app/models/weapon';
import { MatDialog } from '@angular/material/dialog';
import { WeaponFormDialogComponent } from '../weapon-form-dialog/weapon-form-dialog.component';
import { WeaponService } from 'src/app/services/weapon.service';
import { DeleteDialogComponent } from '../../common/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-weapon-table-section',
  templateUrl: './weapon-table-section.component.html',
  styleUrls: ['./weapon-table-section.component.less']
})
export class WeaponTableSectionComponent {
  @Input() weaponSection: WeaponsPerType;
  isOpen: boolean = true;

  constructor(
    private readonly dialog: MatDialog,
    private readonly weaponService: WeaponService,
    ) {}

  toggleSection(){
    this.isOpen = !this.isOpen;
  }

  editWeapon(weapon: Weapon){
    const dialogRef = this.dialog.open(WeaponFormDialogComponent, {
      width: '1000px',
      data: {model: weapon, operation: OperationType.Update}
    });

    dialogRef.afterClosed().subscribe(updatedWeapon => {
      if (updatedWeapon) {
        this.weaponService.updateWeapon(updatedWeapon).subscribe();
      }
    });
  }

  deleteWeapon(weapon: Weapon) {
    this.dialog.open(DeleteDialogComponent, {
      width: '500px',
      data: {
        name: weapon.name, 
        type: "зброю",
        onDelete: () => {
          if (weapon.id) {
            this.weaponService.deleteWeapon(weapon.id).subscribe()
          }
        },
      },
    });
  }
}
