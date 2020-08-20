import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyKeysComponent } from './company-keys.component';

describe('CompanyKeysComponent', () => {
  let component: CompanyKeysComponent;
  let fixture: ComponentFixture<CompanyKeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyKeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
