import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Weapon } from 'src/app/models/weapon';
import { WeaponPropertiesService } from 'src/app/services/weapon.properties.service';
import { WeaponService } from 'src/app/services/weapon.service';

@Component({
  selector: 'app-weapons-table',
  templateUrl: './weapons-table.component.html',
  styleUrls: ['./weapons-table.component.less']
})
export class WeaponsTableComponent implements OnInit {
  weapons$: Observable<Array<Weapon>>;

  constructor(
    private weaponService: WeaponService,
    private weaponPropService: WeaponPropertiesService,
  ) {
    weaponService.shouldRefresh.subscribe(() => this.refresh())
   }

  ngOnInit(): void {
    this.refresh();
  }

  private refresh() {
    this.weaponPropService.getWeaponProperties().subscribe(weaponProps =>{
      this.weapons$ = this.weaponService.getWeapons().pipe(map(weapons => {
        weapons.forEach(w => {
          w.weaponProperties?.forEach(wp => wp.data = weaponProps.find(x => x.id === wp.propertyId));
        })
        return weapons
      }));
    });
  }
}
