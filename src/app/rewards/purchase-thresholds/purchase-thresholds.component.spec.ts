import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseThresholdsComponent } from './purchase-thresholds.component';

describe('PurchaseThresholdsComponent', () => {
  let component: PurchaseThresholdsComponent;
  let fixture: ComponentFixture<PurchaseThresholdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseThresholdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseThresholdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
