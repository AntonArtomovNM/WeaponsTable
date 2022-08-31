import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponPropFormDialogComponent } from './weapon-prop-form-dialog.component';

describe('WeaponPropFormDialogComponent', () => {
  let component: WeaponPropFormDialogComponent;
  let fixture: ComponentFixture<WeaponPropFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaponPropFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponPropFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
