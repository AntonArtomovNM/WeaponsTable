import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaponsTableComponent } from './weapons-table.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { WeaponViewModule } from '../weapon-view/weapon-view.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { CustomPipesModule } from 'src/app/pipes/custom-pipes.module';



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
    MatTooltipModule,
    MatCardModule,
    WeaponViewModule,
    CustomPipesModule,
  ]
})
export class WeaponsTableModule { }
