import { WeaponProperty } from './../../../models/weaponProperty';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weapon-prop-view',
  templateUrl: './weapon-prop-view.component.html',
  styleUrls: ['./weapon-prop-view.component.less']
})
export class WeaponPropViewComponent implements OnInit {
  @Input() weaponProp: WeaponProperty;
  
  isViewMode: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  
  switchViewMode(updatedWeaponProp: WeaponProperty | null = null){
    this.isViewMode = !this.isViewMode;

    if (updatedWeaponProp){
      this.weaponProp = updatedWeaponProp;
    }
  }
}
