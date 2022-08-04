import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaponViewComponent } from './weapon-view.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { WeaponEditModule } from '../weapon-edit/weapon-edit.module';
import { MatDividerModule } from '@angular/material/divider';



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
    WeaponEditModule,
  ],
  exports: [
    WeaponViewComponent
  ]
})
export class WeaponViewModule { }
