import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaponPropEditComponent } from './weapon-prop-edit.component';
import { WeaponPropFormModule } from '../weapon-prop-form/weapon-prop-form.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    WeaponPropEditComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    WeaponPropFormModule,
  ],
  exports: [
    WeaponPropEditComponent
  ]
})
export class WeaponPropEditModule { }
