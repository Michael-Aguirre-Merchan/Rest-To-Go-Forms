import { Component, OnInit } from '@angular/core';
import { LocationHours } from '../models/location-hours.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-location-hours',
  templateUrl: './location-hours.component.html',
  styleUrls: ['./location-hours.component.scss']
})
export class LocationHoursComponent implements OnInit {
  dataForm: FormGroup;
  
  private locationHours: LocationHours;

  constructor(private fb: FormBuilder) { }

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
      this.locationHours = this.dataForm.value;
      console.log(this.locationHours)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}
