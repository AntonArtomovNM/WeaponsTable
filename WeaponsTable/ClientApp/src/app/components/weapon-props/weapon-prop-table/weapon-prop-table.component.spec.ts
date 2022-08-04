import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponPropTableComponent } from './weapon-prop-table.component';

describe('WeaponPropTableComponent', () => {
  let component: WeaponPropTableComponent;
  let fixture: ComponentFixture<WeaponPropTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaponPropTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponPropTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
