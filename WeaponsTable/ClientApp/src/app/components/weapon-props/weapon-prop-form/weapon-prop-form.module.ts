import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaponPropFormComponent } from './weapon-prop-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    WeaponPropFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
  ],
  exports: [
    WeaponPropFormComponent
  ]
})
export class WeaponPropFormModule { }
