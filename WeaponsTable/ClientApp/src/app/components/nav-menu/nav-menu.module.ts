import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavMenuComponent } from './nav-menu.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WeaponAddDialogModule } from '../weapons/weapon-add-dialog/weapon-add-dialog.module';
import { WeaponPropAddDialogModule } from '../weapon-props/weapon-prop-add-dialog/weapon-prop-add-dialog.module';
import { StyleService } from 'src/app/services/style.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavMenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatToolbarModule,
    WeaponAddDialogModule,
    WeaponPropAddDialogModule,
  ],
  exports: [
    NavMenuComponent
  ],
  providers: [
    StyleService
  ]
})
export class NavMenuModule { }
