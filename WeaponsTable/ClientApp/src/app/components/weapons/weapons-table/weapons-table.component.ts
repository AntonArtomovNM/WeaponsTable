import { Component, OnInit } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { map, Observable } from 'rxjs';
import { WeaponType } from 'src/app/enums/weaponType';
import { Weapon } from 'src/app/models/weapon';
import { WeaponsPerType } from 'src/app/models/weaponsPerType';
import { WeaponPropertiesService } from 'src/app/services/weapon.properties.service';
import { WeaponService } from 'src/app/services/weapon.service';

@Component({
  selector: 'app-weapons-table',
  templateUrl: './weapons-table.component.html',
  styleUrls: ['./weapons-table.component.less'],
  viewProviders: [MatExpansionPanel],
})
export class WeaponsTableComponent implements OnInit {
  weapons$: Observable<Array<Weapon>>;
  sortedWeapons: Array<WeaponsPerType> = [
    {
      type: WeaponType.SimpleMelee,
      weapons: [],
    },
    {
      type: WeaponType.SimpleRange,
      weapons: [],
    },
    {
      type: WeaponType.MartialMelee,
      weapons: [],
    },
    {
      type: WeaponType.MartialRange,
      weapons: [],
    },
    {
      type: WeaponType.Firearm,
      weapons: [],
      additionalInfo: `Дальнобойное и крайне смертоносное оружие. Огнестрелами владеют Изобретатели, Воины-Стрелки, Следопыты-Ковбои и персонажи с чертой Стрелок.
      
      Каждое огнестрельное оружие требует свои собственные патроны для совершения атаки, и из-за редкости найти или купить их может быть практически невозможно. Однако, если материалы собраны, вы можете самостоятельно изготовить боеприпасы с помощью Инструментов Лудильщика за половину стоимости.

      Иногда в ходе боя ваше огнестрельное оружие может выйти из строя (см. свойство осечка) и вам нужно будет потратить действие, чтобы попытаться его починить. Чтобы это сделать, вы должны пройти успешную проверку Инструментов Лудильщика (Сл 8 + значение осечки). Если проверка не пройдена, оружие сломано и должно быть починено вне боя за четверть его стоимости. `,
    },
  ];

  constructor(
    private readonly weaponService: WeaponService,
    private readonly weaponPropService: WeaponPropertiesService,
  ) {
    weaponService.shouldRefresh.subscribe(() => this.refresh());
    weaponPropService.shouldRefresh.subscribe(() => this.refresh());
   }

  ngOnInit(): void {
    this.refresh();
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
