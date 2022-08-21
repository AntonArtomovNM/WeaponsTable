import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { WeaponType } from 'src/app/enums/weaponType';
import { Weapon } from 'src/app/models/weapon';
import { WeaponsPerType } from 'src/app/models/weaponsPerType';
import { WeaponPropertiesService } from 'src/app/services/weapon.properties.service';
import { WeaponService } from 'src/app/services/weapon.service';

@Component({
  selector: 'app-weapons-table',
  templateUrl: './weapons-table.component.html',
  styleUrls: ['./weapons-table.component.less']
})
export class WeaponsTableComponent implements OnInit {
  weapons$: Observable<Array<Weapon>>;
  sortedWeapons: Array<WeaponsPerType> = [
    {
      type: WeaponType.ПростоеРукопашное,
      displayName: 'Простое Рукопашное',
      isOpen: true,
      weapons: [],
    },
    {
      type: WeaponType.ПростоеДальнобойное,
      displayName: 'Простое Дальнобойное',
      isOpen: true,
      weapons: [],
    },
    {
      type: WeaponType.ВоинскоеРукопашное,
      displayName: 'Воинское Рукопашное',
      isOpen: true,
      weapons: [],
    },
    {
      type: WeaponType.ВоинскоеДальнобойное,
      displayName: 'Воинское Дальнобойное',
      isOpen: true,
      weapons: [],
    },
  ];

  constructor(
    private weaponService: WeaponService,
    private weaponPropService: WeaponPropertiesService,
  ) {
    weaponService.shouldRefresh.subscribe(() => this.refresh())
   }

  ngOnInit(): void {
    this.refresh();
  }

  toggleType(weaponsPerType: any){
    weaponsPerType.isOpen = !weaponsPerType.isOpen;
  }

  private refresh() {
    this.sortedWeapons.forEach(sw => sw.weapons = []);

    this.weaponPropService.getWeaponProperties().subscribe(
      weaponProps =>{
        this.weapons$ = this.weaponService.getWeapons().pipe(map(weapons => {
          weapons.sort(this.compareWeapons).forEach(w => {
            w.weaponProperties?.forEach(wp => wp.data = weaponProps.find(x => x.id === wp.propertyId));

            this.sortedWeapons.find(sw => sw.type === w.weaponType)?.weapons.push(w);
          })
          return weapons
        }));
      }
    );
  }

  private compareWeapons(w1: Weapon, w2: Weapon): number {
    if (w1.isExotic && !w2.isExotic) {
      return 1;
    } 
    if (!w1.isExotic && w2.isExotic) {
      return -1;
    }
    if (w1.name > w2.name) {
      return 1;
    }
    if (w1.name < w2.name) {
      return -1;
    }
    return 0;
  }
}
