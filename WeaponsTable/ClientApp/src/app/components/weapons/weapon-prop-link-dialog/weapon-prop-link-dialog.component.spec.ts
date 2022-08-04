import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponPropLinkDialogComponent } from './weapon-prop-link-dialog.component';

describe('WeaponPropLinkDialogComponent', () => {
  let component: WeaponPropLinkDialogComponent;
  let fixture: ComponentFixture<WeaponPropLinkDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaponPropLinkDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponPropLinkDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
