import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoticPropertyComponent } from './exotic-property.component';

describe('ExoticPropertyComponent', () => {
  let component: ExoticPropertyComponent;
  let fixture: ComponentFixture<ExoticPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoticPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoticPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
