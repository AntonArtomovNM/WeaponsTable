import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaponPropLinkDialogComponent } from './weapon-prop-link-dialog.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    WeaponPropLinkDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatInputModule,
  ]
})
export class WeaponPropLinkDialogModule { }
