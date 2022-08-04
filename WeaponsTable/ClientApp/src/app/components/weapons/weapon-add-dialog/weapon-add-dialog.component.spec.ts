import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponAddDialogComponent } from './weapon-add-dialog.component';

describe('WeaponAddDialogComponent', () => {
  let component: WeaponAddDialogComponent;
  let fixture: ComponentFixture<WeaponAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaponAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
