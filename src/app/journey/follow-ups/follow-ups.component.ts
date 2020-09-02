import { Component, OnInit, OnDestroy } from '@angular/core';
import { FollowUp } from '../models/follow.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JourneyService } from '../journey.service';

@Component({
  selector: 'app-follow-ups',
  templateUrl: './follow-ups.component.html',
  styleUrls: ['./follow-ups.component.scss']
})
export class FollowUpsComponent implements OnInit, OnDestroy {

  private followUp: FollowUp;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder, private journeyService: JourneyService) { }
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
        this.followUp = this.dataForm.value;
        this.journeyService.addAccountDetails ({
          code: this.followUp.code,
          notes: this.followUp.notes,
          next_action_at: this.followUp.nextActionAt,
          reminder: this.followUp.reminder,
          total: this.followUp.total,
          owner_unique_id: this.followUp.ownerUniqueId,
          owner_name: this.followUp.ownerName,
          owner_email: this.followUp.ownerEmail,
          duration: this.followUp.duration,
          duration_unit: this.followUp.durationUnit,
          duration_description: this.followUp.durationDescription,  
          status: this.followUp.status,  
          enabled: this.followUp.enabled
        })
        console.log(this.followUp)
      }
    }
    ngOnDestroy(): void {
      this.loading = false;
  }
}