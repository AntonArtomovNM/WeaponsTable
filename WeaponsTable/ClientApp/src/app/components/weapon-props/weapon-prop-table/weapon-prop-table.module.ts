import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaponPropTableComponent } from './weapon-prop-table.component';
import { WeaponPropViewModule } from '../weapon-prop-view/weapon-prop-view.module';
import { MatDividerModule } from '@angular/material/divider';
import { SearchFieldModule } from '../../common/search-field/search-field.module';



@NgModule({
  declarations: [
    WeaponPropTableComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    WeaponPropViewModule,
    SearchFieldModule,
  ]
})
export class WeaponPropTableModule { }
