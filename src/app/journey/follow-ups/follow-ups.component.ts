import { Component, OnInit } from '@angular/core';
import { FollowUps } from '../models/follow-ups.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-follow-ups',
  templateUrl: './follow-ups.component.html',
  styleUrls: ['./follow-ups.component.scss']
})
export class FollowUpsComponent implements OnInit {

  private followUps: FollowUps;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void { this.initForm(); }

  initForm() {

    this.dataForm = this.fb.group({
      code: ['', Validators.required],
      notes: ['', Validators.required],
      next_action_at: ['', Validators.required],
      reminder: ['', Validators.required],
      total: ['', Validators.required],
      owner_unique_id: ['', Validators.required],
      owner_name: ['', Validators.required],
      owner_email: ['', Validators.required],
      duration: ['', Validators.required],
      duration_unit: ['', Validators.required],
      duration_description: ['', Validators.required],  
      status: ['', Validators.required],  
      enabled: ['', Validators.required]  
    });
  }
    submit()  {
      if (this.dataForm.valid) {
        this.followUps = this.dataForm.value;
        console.log(this.followUps)
      }
    }
    ngOnDestroy(): void {
      this.loading = false;
  }
}