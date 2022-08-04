import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeaponPropTableComponent } from './components/weapon-props/weapon-prop-table/weapon-prop-table.component';
import { WeaponsTableComponent } from './components/weapons/weapons-table/weapons-table.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'weapons',
    pathMatch: 'full',
  },
  {
    path: 'weapons',
    component: WeaponsTableComponent,
  },
  {
    path: 'weapon-props',
    component: WeaponPropTableComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
