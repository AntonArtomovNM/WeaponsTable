import { WeaponPropFormModule } from '../weapon-prop-form/weapon-prop-form.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaponPropAddDialogComponent } from './weapon-prop-add-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    WeaponPropAddDialogComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    WeaponPropFormModule,
  ]
})
export class WeaponPropAddDialogModule { }
