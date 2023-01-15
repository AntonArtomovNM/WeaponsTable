import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OperationType } from 'src/app/enums/operationType';
import { weaponTypeOptions, diceOptions, damageTypeOptions } from 'src/app/forms/weaponFormOptions';
import { Weapon } from 'src/app/models/weapon';
import { WeaponPropertyLink } from 'src/app/models/weaponPropertyLink';
import { WeaponPropLinkDialogComponent } from '../weapon-prop-link-dialog/weapon-prop-link-dialog.component';

@Component({
  selector: 'app-weapon-form-dialog',
  templateUrl: './weapon-form-dialog.component.html',
  styleUrls: ['./weapon-form-dialog.component.less']
})
export class WeaponFormDialogComponent implements OnInit {
  form: FormGroup;
  weaponProperties: Array<WeaponPropertyLink> = [];
  
  weaponTypeOptions = weaponTypeOptions;
  diceOptions = diceOptions;
  damageTypeOptions = damageTypeOptions;

  constructor(
    @Inject(MAT_DIALOG_DATA) public readonly data: WeaponFormDialogData,
    private readonly dialogRef: MatDialogRef<WeaponFormDialogComponent>,
    private readonly dialog: MatDialog,
    readonly fb: FormBuilder,
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
    if (!this.data.model){
      return;
    }

    const formModel = {...this.data.model};
    delete formModel.id;
    delete formModel.weaponProperties;
    delete formModel.isNew;

    if (!formModel.damage){
      formModel.damage = { diceType: null, diceAmount: null};  
    }

    this.form.setValue(formModel);

    if (this.data.model.weaponProperties){
      this.weaponProperties = [...this.data.model.weaponProperties];
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
      id: this.data.model?.id,
      ...this.form.value,
      weaponProperties: this.weaponProperties
    } as Weapon;

    if(!this.isDamageRequired()) {
      delete weapon.damage;
      delete weapon.damageTypes;
    }

    return weapon;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  isDamageRequired(){
    return this.form.value.damage?.diceType || this.form.value.damage?.diceAmount || this.form.value.damageTypes?.length > 0;
  }
}

export interface WeaponFormDialogData {
  model: Weapon;
  operation: OperationType;
}
