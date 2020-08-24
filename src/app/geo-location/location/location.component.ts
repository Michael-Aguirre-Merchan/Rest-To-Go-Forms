import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '../models/location.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit, OnDestroy {
  dataForm: FormGroup;
  
  private location: Location;

  constructor(private fb: FormBuilder) { }

  loading = false;

  ngOnInit( ): void {
    this.initForm();
  }

  initForm() { 
    this.dataForm = this.fb.group({

      owner_unique_id: ['', Validators.required], 
      owner_type: ['', Validators.required],
      code: ['', Validators.required],
      name: ['', Validators.required],
      source: ['', Validators.required],
      address_unique_id: ['', Validators.required],
      area_unique_id: ['', Validators.required],
      location_parent_id: ['', Validators.required],
      latitude: ['', Validators.required], 
      longitude: ['', Validators.required],
    });
  }
  submit() {
    if (this.dataForm.valid) {
      this.location = this.dataForm.value;
      console.log(this.location)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}
