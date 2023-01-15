import { Component, OnInit } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { combineLatest, map, Observable } from 'rxjs';
import { WeaponType } from 'src/app/enums/weaponType';
import { Weapon } from 'src/app/models/weapon';
import { WeaponProperty } from 'src/app/models/weaponProperty';
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
  data$: Observable<[
    weapons: Array<Weapon>,
    weaponProps: Array<WeaponProperty>
  ]>;

  lastUsedFilter = '';
  weapons: Array<Weapon>;
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
      additionalInfo: `Дальнобійна та вкрай смертоносна зброя. Вогнепалами володіють Винахідники, Воїни Стрільці та персонажі з рисою Стрілець.
      
      Кожна вогнепальна зброя вимагає свої власні набої для здійснення атаки, які може бути складно знайти. Однак, якщо матеріали зібрані, ви можете самостійно виготовити до 20 набоїв за допомогою Інструментів Лудильника як частина Короткого або Тривалого Відпочинку за половину їхньої вартості.

      Іноді під час бою ваша вогнепальна зброя може вийти з ладу (див. властивість Осічка) і вам потрібно буде витратити дію, щоб спробувати її відремонтувати. Щоб це зробити, ви повинні пройти успішну перевірку Інструментів Лудильника (Скл: 8 + значення осічки). Якщо перевірку не пройдено, зброя зламана і має бути полагоджена як частина Короткого або Тривалого Відпочинку за чверть її вартості.`,
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

  onSearch(filterValue: string): void {
    this.lastUsedFilter = filterValue;
    const filteredWeapons = this.weapons.filter(w => w.name.toLowerCase().includes(this.lastUsedFilter));

    this.sortWeapons(filteredWeapons);
  }

  private refresh() : void {
    this.data$ = combineLatest([
      this.weaponService.getWeapons(),
      this.weaponPropService.getWeaponProperties()
    ]).pipe(map(data => {
      this.weapons = data[0];
      const weaponProps = data[1];

      this.weapons.sort(this.compareWeapons).forEach(w => {
        w.weaponProperties?.forEach(wp => wp.data = weaponProps.find(x => x.id === wp.propertyId));
      })

      this.onSearch(this.lastUsedFilter);
      
      return data;
    }));
  }

  private sortWeapons(weapons: Array<Weapon>): void {
    this.sortedWeapons.forEach(sw => sw.weapons = []);

    weapons.forEach(w => {
      this.sortedWeapons.find(sw => sw.type === w.weaponType)?.weapons.push(w);
    })
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
