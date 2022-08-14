import { WeaponProperty } from '../../../models/weaponProperty';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-weapon-prop-form',
  templateUrl: './weapon-prop-form.component.html',
  styleUrls: ['./weapon-prop-form.component.less']
})
export class WeaponPropFormComponent implements OnInit {
  @Input() model: WeaponProperty;
  @Input() onSave: Function;
  @Input() headerButtonsTemplate: TemplateRef<any>;
  @Input() footerButtonsTemplate: TemplateRef<any>;
  
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]]
    });
   }

  ngOnInit(): void {
    if (!this.model){
      return;
    }

    const formModel = {...this.model};
    delete formModel.id;
    delete formModel.isNew;

    this.form.setValue(formModel);
  }

  saveWeaponProp(){
    const weaponProp = {
      id: this.model?.id,
      ...this.form.value
    } as WeaponProperty;

    this.onSave(weaponProp);
  }
}
