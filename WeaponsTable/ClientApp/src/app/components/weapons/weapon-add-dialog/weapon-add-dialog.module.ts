import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaponAddDialogComponent } from './weapon-add-dialog.component';
import { WeaponFormModule } from '../weapon-form/weapon-form.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    WeaponAddDialogComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    WeaponFormModule,
  ]
})
export class WeaponAddDialogModule { }
