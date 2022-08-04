import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponPropAddDialogComponent } from './weapon-prop-add-dialog.component';

describe('WeaponPropAddDialogComponent', () => {
  let component: WeaponPropAddDialogComponent;
  let fixture: ComponentFixture<WeaponPropAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaponPropAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponPropAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
