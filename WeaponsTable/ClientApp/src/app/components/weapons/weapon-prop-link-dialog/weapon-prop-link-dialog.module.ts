import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaponPropLinkDialogComponent } from './weapon-prop-link-dialog.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    WeaponPropLinkDialogComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class WeaponPropLinkDialogModule { }
