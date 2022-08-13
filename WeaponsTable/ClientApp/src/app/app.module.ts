import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeaponsTableModule } from './components/weapons/weapons-table/weapons-table.module';
import { NavMenuModule } from './components/nav-menu/nav-menu.module';
import { WeaponPropTableModule } from './components/weapon-props/weapon-prop-table/weapon-prop-table.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NavMenuModule,
    BrowserAnimationsModule,
    WeaponsTableModule,
    WeaponPropTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
