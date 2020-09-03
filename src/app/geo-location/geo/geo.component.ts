import { Component, OnInit, OnDestroy } from '@angular/core';
import { Geo } from '../models/geo.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeoService } from '../geo.service';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.scss']
})
export class GeoComponent implements OnInit, OnDestroy {
  dataForm: FormGroup;
  
  private geo: Geo;

  constructor(private fb: FormBuilder, private geoService: GeoService) { }

  loading = false;

  ngOnInit( ): void {
    this.initForm();
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
      admin6_code: [''],
      admin6_name: [''],
      postal_code: ['', Validators.required],
      address: ['', Validators.required],
      premise: [''],
      code: ['', Validators.required],
      name: ['', Validators.required],
      first_name: ['', Validators.required],
      middle_name: [''],
      last_name: ['', Validators.required],
      organization: [''],
      latitude: ['', Validators.required], 
      longitude: ['', Validators.required],
      qcode: ['', Validators.required],
      payload: [''],
    });
  }
  submit() {
    if (this.dataForm.valid) {
      this.geo = this.dataForm.value;
      this.geoService.addGeo ({ 
        owner_unique_id: this.geo.ownerUniqueId, 
        owner_type: this.geo.ownerType,
        country_code: this.geo.countryCode,
        country_name: this.geo.countryName,
        admin1_code: this.geo.admin1Code,
        admin2_code: this.geo.admin2Code,
        admin2_name: this.geo.admin2Name,
        admin1_name: this.geo.admin1Name,
        admin3_code: this.geo.admin3Code,
        admin3_name: this.geo.admin3Name,
        admin4_code: this.geo.admin4Code,
        admin4_name: this.geo.admin4Name,
        admin5_code: this.geo.admin5Code,
        admin5_name: this.geo.admin5Name,
        admin6_code: this.geo.admin6Code,
        admin6_name: this.geo.admin6Name,
        postal_code: this.geo.postalCode,
        address: this.geo.address,
        premise: this.geo.premise,
        code: this.geo.code,
        name: this.geo.name,
        first_name: this.geo.firstName,
        middle_name: this.geo.middleName,
        last_name: this.geo.lastName,
        organization: this.geo.organization,
        latitude: this.geo.latitude, 
        longitude: this.geo.longitude,
        qcode: this.geo.qcode,
        payload: this.geo.payload,
      });
      console.log(this.geo)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}
