import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponPropFormComponent } from './weapon-prop-form.component';

describe('WeaponPropFormComponent', () => {
  let component: WeaponPropFormComponent;
  let fixture: ComponentFixture<WeaponPropFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaponPropFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponPropFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
