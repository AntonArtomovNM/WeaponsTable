import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaponsTableComponent } from './weapons-table.component';
import { MatDividerModule } from '@angular/material/divider';
import { WeaponViewModule } from '../weapon-view/weapon-view.module';



@NgModule({
  declarations: [
    WeaponsTableComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    WeaponViewModule,
  ]
})
export class WeaponsTableModule { }
