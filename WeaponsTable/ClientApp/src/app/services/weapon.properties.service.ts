import { HttpClient } from '@angular/common/http';
import { EventEmitter, Inject, Injectable } from '@angular/core';
import { Observable, shareReplay, tap } from 'rxjs';
import { WeaponProperty } from '../models/weaponProperty';
import { WeaponsPropertiesCacheService } from './cache/weapon.properties.cache.service';
import { WeaponsCacheService } from './cache/weapons.cache.service';

@Injectable({
  providedIn: 'root'
})
export class WeaponPropertiesService {
  private readonly weaponPropsEndpoint: string 

  public shouldRefresh = new EventEmitter();

  constructor(
    @Inject('BASE_URL') private baseUrl: string,
    private http: HttpClient, 
    private propertyCacheService: WeaponsPropertiesCacheService,
    private weaponCacheService: WeaponsCacheService,
    ) {
    this.weaponPropsEndpoint = this.baseUrl + 'data/weapons/props'
  }

  getWeaponProperties(): Observable<Array<WeaponProperty>> {
    let weaponProps$ = this.propertyCacheService.getValue();

    if(!weaponProps$)
    {
      weaponProps$ = this.http.get<Array<WeaponProperty>>(this.weaponPropsEndpoint).pipe(shareReplay(1));
      this.propertyCacheService.setValue(weaponProps$);
    };
    return weaponProps$;
  }

  createWeaponProperty(weaponProp: WeaponProperty){
    return this.http.put(this.weaponPropsEndpoint, weaponProp).pipe(tap(_ => {
      this.propertyCacheService.clearCache();
      this.shouldRefresh.emit();
    }));
  }

  updateWeaponProperty(weapon: WeaponProperty){
    return this.http.post(this.weaponPropsEndpoint, weapon).pipe(tap(_ => {
      this.propertyCacheService.clearCache();
    }));
  }

  deleteWeaponProperty(weaponId: string){
    return this.http.delete(this.weaponPropsEndpoint + `/${weaponId}`).pipe(tap(_ => {
      this.propertyCacheService.clearCache();
      this.weaponCacheService.clearCache();
      this.shouldRefresh.emit();
    }));
  }
}
