import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeaponProperty } from 'src/app/models/weaponProperty';
import { WeaponPropertiesService } from 'src/app/services/weapon.properties.service';

@Component({
  selector: 'app-weapon-prop-table',
  templateUrl: './weapon-prop-table.component.html',
  styleUrls: ['./weapon-prop-table.component.less']
})
export class WeaponPropTableComponent implements OnInit {
  weaponsProps$: Observable<Array<WeaponProperty>>;

  constructor(
    private weaponPropService: WeaponPropertiesService
  ) {
    weaponPropService.shouldRefresh.subscribe(() => this.refresh())
   }

  ngOnInit(): void {
    this.refresh();
  }

  private refresh() {
    this.weaponsProps$ = this.weaponPropService.getWeaponProperties();
  }
}
