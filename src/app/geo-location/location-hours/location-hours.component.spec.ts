import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationHoursComponent } from './location-hours.component';

describe('LocationHoursComponent', () => {
  let component: LocationHoursComponent;
  let fixture: ComponentFixture<LocationHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
