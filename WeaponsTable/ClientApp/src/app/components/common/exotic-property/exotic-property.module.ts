import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ExoticPropertyComponent } from './exotic-property.component';



@NgModule({
  declarations: [
    ExoticPropertyComponent
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    MatTooltipModule,
  ],
  exports: [
    ExoticPropertyComponent
  ]
})
export class ExoticPropertyModule { }
