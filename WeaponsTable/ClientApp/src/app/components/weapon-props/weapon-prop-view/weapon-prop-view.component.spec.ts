import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponPropViewComponent } from './weapon-prop-view.component';

describe('WeaponPropViewComponent', () => {
  let component: WeaponPropViewComponent;
  let fixture: ComponentFixture<WeaponPropViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaponPropViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponPropViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
