import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { damageTypeOptions, diceOptions, weaponTypeOptions } from 'src/app/forms/weaponFormOptions';
import { Dice } from 'src/app/models/dice';
import { Weapon } from 'src/app/models/weapon';
import { WeaponPropertyLink } from 'src/app/models/weaponPropertyLink';
import { WeaponPropLinkDialogComponent } from '../weapon-prop-link-dialog/weapon-prop-link-dialog.component';

@Component({
  selector: 'app-weapon-form',
  templateUrl: './weapon-form.component.html',
  styleUrls: ['./weapon-form.component.less']
})
export class WeaponFormComponent implements OnInit {
  @Input() model: Weapon;
  @Input() onSave: Function;
  @Input() headerButtonsTemplate: TemplateRef<any>;
  @Input() footerButtonsTemplate: TemplateRef<any>;
  
  form: FormGroup;
  weaponProperties: Array<WeaponPropertyLink> = [];

  weaponTypeOptions = weaponTypeOptions;
  diceOptions = diceOptions;
  damageTypeOptions = damageTypeOptions;
  
  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
  ) { 
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      isExotic: [false],
      damage: this.fb.group({
        diceType: [null],
        diceAmount: [null],
      }),
      damageTypes: [null],
      weaponType: [null, [Validators.required]],
      price: this.fb.group({
        pp: [0],
        gp: [0],
        sp: [0],
        cp: [0],
      }),
      weight: [null, [Validators.required]],
      description: [null]
    });
  }

  ngOnInit(): void {
    if (!this.model){
      return;
    }

    const formModel = {...this.model};
    delete formModel.id;
    delete formModel.weaponProperties;
    delete formModel.isNew;

    if (!formModel.damage){
      formModel.damage = { diceType: null, diceAmount: null};  
    }

    this.form.setValue(formModel);

    if (this.model.weaponProperties){
      this.weaponProperties = [...this.model.weaponProperties];
    }
  }

  addProperty(){
    const dialogRef = this.dialog.open(WeaponPropLinkDialogComponent, {
      width: '500px',
      data: {existingPropIds: this.weaponProperties.map(wp => wp.propertyId)},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.weaponProperties.push(result);
      }
    })
  }

  removeProperty(propertyId: string){
    this.weaponProperties = this.weaponProperties.filter(p => p.propertyId !== propertyId);
  }

  saveWeapon(){
    const weapon = {
      id: this.model?.id,
      ...this.form.value,
      weaponProperties: this.weaponProperties
    } as Weapon;

    if(!this.isDamageRequired()) {
      delete weapon.damage;
      delete weapon.damageTypes;
    }

    this.onSave(weapon);
  }

  isDamageRequired(){
    return this.form.value.damage?.diceType || this.form.value.damage?.diceAmount || this.form.value.damageTypes?.length > 0;
  }
}
