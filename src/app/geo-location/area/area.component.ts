import { Component, OnInit, OnDestroy } from '@angular/core';
import { Area } from '../models/area.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeoService } from '../geo.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit, OnDestroy {
  dataForm: FormGroup;
  
  private area: Area;

  constructor(private fb: FormBuilder, private geoService: GeoService) { }

  loading = false;

  ngOnInit( ): void {
    this.initForm();
  }

  initForm() { 
    this.dataForm = this.fb.group({

      code: ['', Validators.required], 
      name: ['', Validators.required],
      address_unique_id: ['', Validators.required],
      source: ['', Validators.required],
      area_type: ['', Validators.required],
      area_points: ['', Validators.required],
      
    });
  }
  submit() {
    if (this.dataForm.valid) {
      this.area = this.dataForm.value;
      this.geoService.addArea ({ 
        code: this.area.code, 
        name: this.area.name,
        address_unique_id: this.area.addressUniqueId,
        source: this.area.source,
        area_type: this.area.areaType,
        area_points: this.area.areaPoints,
      });
      console.log(this.area )
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}