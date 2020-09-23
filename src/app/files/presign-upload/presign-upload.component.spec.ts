import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresignUploadComponent } from './presign-upload.component';

describe('PresignUploadComponent', () => {
  let component: PresignUploadComponent;
  let fixture: ComponentFixture<PresignUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresignUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresignUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
