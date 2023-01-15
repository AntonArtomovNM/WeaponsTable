import { SearchFieldModule } from './../../common/search-field/search-field.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaponsTableComponent } from './weapons-table.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { WeaponTableSectionModule } from '../weapon-table-section/weapon-table-section.module';



@NgModule({
  declarations: [
    WeaponsTableComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    WeaponTableSectionModule,
    SearchFieldModule,
  ]
})
export class WeaponsTableModule { }
