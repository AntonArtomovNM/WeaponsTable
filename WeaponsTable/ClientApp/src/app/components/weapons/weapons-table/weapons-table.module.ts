import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaponsTableComponent } from './weapons-table.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { WeaponViewModule } from '../weapon-view/weapon-view.module';



@NgModule({
  declarations: [
    WeaponsTableComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    WeaponViewModule,
  ]
})
export class WeaponsTableModule { }
