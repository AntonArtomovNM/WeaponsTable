import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { WeaponProperty } from 'src/app/models/weaponProperty';
import { WeaponPropertiesService } from 'src/app/services/weapon.properties.service';

@Component({
  selector: 'app-weapon-prop-table',
  templateUrl: './weapon-prop-table.component.html',
  styleUrls: ['./weapon-prop-table.component.less']
})
export class WeaponPropTableComponent implements OnInit {
  weaponsProps$: Observable<Array<WeaponProperty>>;

  lastUsedFilter = '';
  filteredWeaponProps: Array<WeaponProperty>;

  constructor(
    private weaponPropService: WeaponPropertiesService
  ) {
    weaponPropService.shouldRefresh.subscribe(() => this.refresh())
   }

  ngOnInit(): void {
    this.refresh();
  }

  onSearch(weaponProps: Array<WeaponProperty>, filterValue: string): void {
    this.lastUsedFilter = filterValue;
    this.filteredWeaponProps = weaponProps.filter(wp => wp.name.toLowerCase().includes(this.lastUsedFilter));
  }

  private refresh() {
    this.weaponsProps$ = this.weaponPropService.getWeaponProperties().pipe(map(props => {
      props.sort((p1, p2) => p1.name > p2.name ? 1 : p1.name < p2.name ? -1 : 0);
      this.onSearch(props, this.lastUsedFilter);

      return props;
    }));
  }
}
