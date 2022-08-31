import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaponFormDialogComponent } from './weapon-form-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CustomPipesModule } from 'src/app/pipes/custom-pipes.module';
import { WeaponPropLinkDialogModule } from '../weapon-prop-link-dialog/weapon-prop-link-dialog.module';



@NgModule({
  declarations: [
    WeaponFormDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatChipsModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    WeaponPropLinkDialogModule,
    CustomPipesModule,
  ]
})
export class WeaponFormDialogModule { }
