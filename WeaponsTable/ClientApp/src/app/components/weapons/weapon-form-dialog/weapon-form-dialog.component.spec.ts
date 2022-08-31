import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponFormDialogComponent } from './weapon-form-dialog.component';

describe('WeaponFormDialogComponent', () => {
  let component: WeaponFormDialogComponent;
  let fixture: ComponentFixture<WeaponFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaponFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
