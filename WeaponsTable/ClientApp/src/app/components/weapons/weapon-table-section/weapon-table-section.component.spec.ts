import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponTableSectionComponent } from './weapon-table-section.component';

describe('WeaponTableSectionComponent', () => {
  let component: WeaponTableSectionComponent;
  let fixture: ComponentFixture<WeaponTableSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaponTableSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponTableSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
