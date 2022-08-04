import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaponPropViewComponent } from './weapon-prop-view.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { WeaponPropEditModule } from '../weapon-prop-edit/weapon-prop-edit.module';



@NgModule({
  declarations: [
    WeaponPropViewComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    WeaponPropEditModule,
  ],
  exports: [
    WeaponPropViewComponent
  ]
})
export class WeaponPropViewModule { }
