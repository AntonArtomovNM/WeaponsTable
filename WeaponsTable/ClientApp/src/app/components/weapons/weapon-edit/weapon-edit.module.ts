import { DeleteDialogModule } from '../../common/delete-dialog/delete-dialog.module';
import { WeaponFormModule } from '../weapon-form/weapon-form.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaponEditComponent } from './weapon-edit.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    WeaponEditComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    WeaponFormModule,
    DeleteDialogModule,
  ],
  exports: [
    WeaponEditComponent
  ]
})
export class WeaponEditModule { }
