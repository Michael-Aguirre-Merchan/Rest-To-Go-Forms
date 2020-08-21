import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbKeysComponent } from './fb-keys.component';

describe('FbKeysComponent', () => {
  let component: FbKeysComponent;
  let fixture: ComponentFixture<FbKeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbKeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
