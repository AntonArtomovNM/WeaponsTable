import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DamageTypeNamePipe } from './damage-type-name.pipe';
import { WeaponDamagePipe } from './weapon-damage.pipe';
import { PricePipe } from './price.pipe';
import { WeaponTypeNamePipe } from './weapon-type-name.pipe';
import { WeightPipe } from './weight.pipe';



@NgModule({
  declarations: [
    DamageTypeNamePipe,
    WeaponDamagePipe,
    PricePipe,
    WeaponTypeNamePipe,
    WeightPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DamageTypeNamePipe,
    WeaponDamagePipe,
    PricePipe,
    WeaponTypeNamePipe,
    WeightPipe,
  ]
})
export class CustomPipesModule { }
