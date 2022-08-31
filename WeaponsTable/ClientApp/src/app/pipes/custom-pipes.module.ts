import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DamageTypeNamePipe } from './damage-type-name.pipe';
import { WeaponDamagePipe } from './weapon-damage.pipe';
import { PricePipe } from './price.pipe';
import { WeaponTypeNamePipe } from './weapon-type-name.pipe';
import { WeightPipe } from './weight.pipe';
import { WeaponDamageTypesPipe } from './weapon-damage-types.pipe';



@NgModule({
  declarations: [
    DamageTypeNamePipe,
    WeaponDamagePipe,
    PricePipe,
    WeaponTypeNamePipe,
    WeightPipe,
    WeaponDamageTypesPipe,
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
    WeaponDamageTypesPipe,
  ]
})
export class CustomPipesModule { }
