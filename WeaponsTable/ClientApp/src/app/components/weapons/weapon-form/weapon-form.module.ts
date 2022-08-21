import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaponFormComponent } from './weapon-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { WeaponPropLinkDialogModule } from '../weapon-prop-link-dialog/weapon-prop-link-dialog.module';


@NgModule({
  declarations: [
    WeaponFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatSelectModule,
    MatCheckboxModule,
    WeaponPropLinkDialogModule,
  ],
  exports: [
    WeaponFormComponent
  ]
})
export class WeaponFormModule { }
