import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiseComponent } from './premise.component';

describe('PremiseComponent', () => {
  let component: PremiseComponent;
  let fixture: ComponentFixture<PremiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
