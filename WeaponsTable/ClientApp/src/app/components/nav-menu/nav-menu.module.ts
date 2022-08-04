import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavMenuComponent } from './nav-menu.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { WeaponAddDialogModule } from '../weapons/weapon-add-dialog/weapon-add-dialog.module';
import { WeaponPropAddDialogModule } from '../weapon-props/weapon-prop-add-dialog/weapon-prop-add-dialog.module';


@NgModule({
  declarations: [
    NavMenuComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    WeaponAddDialogModule,
    WeaponPropAddDialogModule,
  ],
  exports: [
    NavMenuComponent
  ]
})
export class NavMenuModule { }
