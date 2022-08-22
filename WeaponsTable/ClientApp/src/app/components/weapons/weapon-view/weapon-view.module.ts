import { ExoticPropertyModule } from './../../common/exotic-property/exotic-property.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaponViewComponent } from './weapon-view.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { WeaponEditModule } from '../weapon-edit/weapon-edit.module';
import { CustomPipesModule } from 'src/app/pipes/custom-pipes.module';



@NgModule({
  declarations: [
    WeaponViewComponent
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatBadgeModule,
    WeaponEditModule,
    ExoticPropertyModule,
    CustomPipesModule,
  ],
  exports: [
    WeaponViewComponent
  ]
})
export class WeaponViewModule { }
