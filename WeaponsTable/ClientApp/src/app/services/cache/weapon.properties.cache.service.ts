import { WeaponProperty } from './../../models/weaponProperty';
import { Injectable } from "@angular/core";
import { AbstractCacheService } from "./abstract.cache.service";

@Injectable({
  providedIn: 'root'
})
export class WeaponsPropertiesCacheService extends AbstractCacheService<Array<WeaponProperty>> {

}