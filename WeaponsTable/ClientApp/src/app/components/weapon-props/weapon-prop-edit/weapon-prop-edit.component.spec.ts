import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponPropEditComponent } from './weapon-prop-edit.component';

describe('WeaponPropEditComponent', () => {
  let component: WeaponPropEditComponent;
  let fixture: ComponentFixture<WeaponPropEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaponPropEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponPropEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
