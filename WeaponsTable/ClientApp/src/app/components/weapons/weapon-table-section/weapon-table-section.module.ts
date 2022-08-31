import { MatBadgeModule } from '@angular/material/badge';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaponTableSectionComponent } from './weapon-table-section.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CustomPipesModule } from 'src/app/pipes/custom-pipes.module';
import { ExoticPropertyModule } from '../../common/exotic-property/exotic-property.module';
import { WeaponFormDialogModule } from '../weapon-form-dialog/weapon-form-dialog.module';
import { DeleteDialogModule } from '../../common/delete-dialog/delete-dialog.module';



@NgModule({
  declarations: [
    WeaponTableSectionComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatChipsModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatRippleModule,
    MatBadgeModule,
    WeaponFormDialogModule,
    DeleteDialogModule,
    ExoticPropertyModule,
    CustomPipesModule,
  ],
  exports: [
    WeaponTableSectionComponent
  ]
})
export class WeaponTableSectionModule { }
