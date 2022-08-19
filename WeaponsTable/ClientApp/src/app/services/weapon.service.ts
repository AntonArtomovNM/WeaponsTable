import { HttpClient } from '@angular/common/http';
import { EventEmitter, Inject, Injectable } from '@angular/core';
import { Observable, shareReplay, tap } from 'rxjs';
import { Weapon } from '../models/weapon';
import { WeaponsCacheService } from './cache/weapons.cache.service';

@Injectable({
  providedIn: 'root'
})
export class WeaponService {
  private readonly weaponsEndpoint: string 
  
  public shouldRefresh = new EventEmitter();
  
  constructor(
    @Inject('BASE_URL') private baseUrl: string,
    private http: HttpClient, 
    private cacheService: WeaponsCacheService,
  ) {
    this.weaponsEndpoint = this.baseUrl + 'data/weapons'
  }

  getWeapons(): Observable<Array<Weapon>> {
    let weapons$ = this.cacheService.getValue();

    if(!weapons$)
    {
      weapons$ = this.http.get<Array<Weapon>>(this.weaponsEndpoint).pipe(shareReplay(1));
      this.cacheService.setValue(weapons$);
    };
    return weapons$;
  }

  createWeapon(weapon: Weapon){
    return this.http.put(this.weaponsEndpoint, weapon).pipe(tap(_ => {
      this.cacheService.clearCache();
      this.shouldRefresh.emit();
    }));
  }

  updateWeapon(weapon: Weapon){
    return this.http.post(this.weaponsEndpoint, weapon).pipe(tap(_ => {
      this.cacheService.clearCache();
    }));
  }

  deleteWeapon(weaponId: string){
    return this.http.delete(this.weaponsEndpoint + `/${weaponId}`).pipe(tap(_ => {
      this.cacheService.clearCache();
      this.shouldRefresh.emit();
    }));
  }
}
