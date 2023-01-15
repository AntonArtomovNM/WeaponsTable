import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaponPropFormDialogComponent } from './weapon-prop-form-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CustomPipesModule } from 'src/app/pipes/custom-pipes.module';



@NgModule({
  declarations: [
    WeaponPropFormDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CustomPipesModule,
  ],
  exports: [
    WeaponPropFormDialogComponent
  ]
})
export class WeaponPropFormDialogModule { }
