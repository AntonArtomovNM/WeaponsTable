import { Injectable } from "@angular/core";
import { Weapon } from "src/app/models/weapon";
import { AbstractCacheService } from "./abstract.cache.service";

@Injectable({
  providedIn: 'root'
})
export class WeaponsCacheService extends AbstractCacheService<Array<Weapon>> {

}