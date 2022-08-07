import { WeaponPropertiesService } from 'src/app/services/weapon.properties.service';
import { WeaponPropertyLink } from 'src/app/models/weaponPropertyLink';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WeaponProperty } from 'src/app/models/weaponProperty';
import { Observable } from 'rxjs';
import { map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-weapon-prop-link-dialog',
  templateUrl: './weapon-prop-link-dialog.component.html',
  styleUrls: ['./weapon-prop-link-dialog.component.less']
})
export class WeaponPropLinkDialogComponent implements OnInit {
  weaponProps: Array<WeaponProperty>;
  filteredOptions: Observable<Array<WeaponProperty>>;
  form: FormGroup;
  formControl = new FormControl();
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: WeaponPropLinkDialogData,
    public dialogRef: MatDialogRef<WeaponPropLinkDialogComponent>,
    private fb: FormBuilder,
    weaponPropService: WeaponPropertiesService,
  ) {
    this.form = this.fb.group({
      propertyId: [null, [Validators.required]],
      additionalData: [null]
    });

    weaponPropService.getWeaponProperties().subscribe(result => {
      this.weaponProps = result.filter(p => !data.existingPropIds.find(id => p.id === id));
    })
  }

  ngOnInit(): void {
    this.filteredOptions = this.form.controls['propertyId'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  getPropName(propertyId: string){
    return this.weaponProps?.find(p => p.id === propertyId)?.name;
  }

  getPropLink(){
    const link = {...this.form.value} as WeaponPropertyLink;
    link.data = this.weaponProps?.find(p => p.id === link.propertyId);
    return link;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  private _filter(value: string): WeaponProperty[] {
    const filterValue = value.toLowerCase();
    return this.weaponProps.filter(prop => prop.name.toLowerCase().includes(filterValue));
  }
}

export interface WeaponPropLinkDialogData {
  existingPropIds: Array<string>;
}