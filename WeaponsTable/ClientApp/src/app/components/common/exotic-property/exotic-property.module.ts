import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ExoticPropertyComponent } from './exotic-property.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    ExoticPropertyComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
    MatIconModule,
  ],
  exports: [
    ExoticPropertyComponent
  ]
})
export class ExoticPropertyModule { }
