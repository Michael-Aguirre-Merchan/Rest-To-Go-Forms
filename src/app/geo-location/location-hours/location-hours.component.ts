import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocationHour } from '../models/location-hour.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeoService } from '../geo.service';

@Component({
  selector: 'app-location-hours',
  templateUrl: './location-hours.component.html',
  styleUrls: ['./location-hours.component.scss']
})
export class LocationHoursComponent implements OnInit, OnDestroy {
  dataForm: FormGroup;
  
  private locationHour: LocationHour;

  constructor(private fb: FormBuilder, private geoService: GeoService) { }

  loading = false;

  ngOnInit( ): void {
    this.initForm();
  }

  initForm() { 
    this.dataForm = this.fb.group({

      day_name: ['', Validators.required], 
      open_at: ['', Validators.required],
      close_at: ['', Validators.required],
      shift_id: ['', Validators.required],
      shift_name: ['', Validators.required],
      shift_start_time: ['', Validators.required],
      shift_end_time: ['', Validators.required],
      
    });
  }
  submit() {
    if (this.dataForm.valid) {
      this.locationHour = this.dataForm.value;
      this.geoService.addLocationHours ({ 
        day_name: this.locationHour.dayName, 
        open_at: this.locationHour.openAt,
        close_at: this.locationHour.closeAt,
        shift_id: this.locationHour.shiftId,
        shift_name: this.locationHour.shiftName,
        shift_start_time: this.locationHour.shiftStartTime,
        shift_end_time: this.locationHour.shiftEndTime,
      });
      console.log(this.locationHour)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}
