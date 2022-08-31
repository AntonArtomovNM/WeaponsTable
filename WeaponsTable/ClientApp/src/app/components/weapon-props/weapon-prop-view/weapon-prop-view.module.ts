import { MatBadgeModule } from '@angular/material/badge';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaponPropViewComponent } from './weapon-prop-view.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { WeaponPropFormDialogModule } from '../weapon-prop-form-dialog/weapon-prop-form-dialog.module';
import { DeleteDialogModule } from '../../common/delete-dialog/delete-dialog.module';



@NgModule({
  declarations: [
    WeaponPropViewComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatBadgeModule,
    WeaponPropFormDialogModule,
    DeleteDialogModule,
  ],
  exports: [
    WeaponPropViewComponent
  ]
})
export class WeaponPropViewModule { }
