import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WeaponProperty } from 'src/app/models/weaponProperty';

@Component({
  selector: 'app-weapon-prop-form-dialog',
  templateUrl: './weapon-prop-form-dialog.component.html',
  styleUrls: ['./weapon-prop-form-dialog.component.less']
})
export class WeaponPropFormDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public readonly data: WeaponPropFormDialogData,
    private readonly dialogRef: MatDialogRef<WeaponPropFormDialogComponent>,
    readonly fb: FormBuilder,
    ) {
      this.form = this.fb.group({
        name: [null, [Validators.required]],
        description: [null, [Validators.required]]
      });
    }

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    if (!this.data.model){
      return;
    }

    const formModel = {...this.data.model};
    delete formModel.id;
    delete formModel.isNew;

    this.form.setValue(formModel);
  }

  saveWeaponProp(){
    const weaponProp = {
      id: this.data.model?.id,
      ...this.form.value
    } as WeaponProperty;

    return weaponProp;
  }
}

export interface WeaponPropFormDialogData {
  model: WeaponProperty;
  operation: string;
}

