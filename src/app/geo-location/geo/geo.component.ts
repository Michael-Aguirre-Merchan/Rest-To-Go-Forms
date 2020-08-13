import { Component, OnInit } from '@angular/core';
import { Geo } from '../models/geo.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.scss']
})
export class GeoComponent implements OnInit {
  dataForm: FormGroup;
  
lat;
lng; 

  private geo: Geo;

  constructor(private fb: FormBuilder) { }

  loading = false;

  ngOnInit( ): void {
    this.initForm();

    this.getUserLocation();
    }

    getUserLocation() {
       if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
          });
    }
  }

  initForm() { 
    this.dataForm = this.fb.group({
      owner_unique_id: ['', Validators.required], 
      owner_type: ['', Validators.required],
      country_code: ['', Validators.required],
      country_name: ['', Validators.required],
      admin1_code: ['', Validators.required],
      admin2_code: ['', Validators.required],
      admin2_name: ['', Validators.required],
      admin1_name: ['', Validators.required],
      admin3_code: ['', Validators.required],
      admin3_name: ['', Validators.required],
      admin4_code: ['', Validators.required],
      admin4_name: ['', Validators.required],
      admin5_code: ['', Validators.required],
      admin5_name: ['', Validators.required],
      admin6_code: ['', Validators.required],
      admin6_name: ['', Validators.required],
      postal_code: ['', Validators.required],
      addres: ['', Validators.required],
      premise: ['', Validators.required],
      code: ['', Validators.required],
      name: ['', Validators.required],
      first_name :['', Validators.required],
      middle_name: ['', Validators.required],
      last_name: ['', Validators.required],
      organization: ['', Validators.required],
      latitude: ['', Validators.required], 
      longitude: ['', Validators.required],
      qcode: ['', Validators.required],
      payload: ['', Validators.required],
    });
  }
  submit() {
    if (this.dataForm.valid) {
      this.geo = this.dataForm.value;
      console.log(this.geo)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}
