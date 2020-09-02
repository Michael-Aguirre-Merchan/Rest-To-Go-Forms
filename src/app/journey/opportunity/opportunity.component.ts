import { Component, OnInit, OnDestroy } from '@angular/core';
import { Opportunity } from '../models/opportunity.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JourneyService } from '../journey.service';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.scss']
})
export class OpportunityComponent implements OnInit, OnDestroy {

  private opportunity: Opportunity;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder, private journeyService: JourneyService) { }
  ngOnInit(): void { this.initForm(); }

  initForm() {

    this.dataForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      notes: ['', Validators.required],
      content_url: ['', Validators.required],
      money: ['', Validators.required],
      budget: ['', Validators.required],
      total: ['', Validators.required],
      duration: ['', Validators.required],
      duration_unit: ['', Validators.required],
      duration_description: ['', Validators.required],
      payload: ['', Validators.required],
      next_action_at: ['', Validators.required],
      owner_unique_id: ['', Validators.required],  
      owner_name: ['', Validators.required],  
      owner_email: ['', Validators.required]  
    });
  }
    submit()  {
      if (this.dataForm.valid) {
        this.opportunity = this.dataForm.value;
        this.journeyService.addAccountDetails ({
          code: this.opportunity.code,
          name: this.opportunity.name,
          notes: this.opportunity.notes,
          content_url: this.opportunity.contentUrl,
          money: this.opportunity.money,
          budget: this.opportunity.budget,
          total: this.opportunity.total,
          duration: this.opportunity.duration,
          duration_unit: this.opportunity.durationUnit,
          duration_description: this.opportunity.durationDescription,
          payload: this.opportunity.payload,
          next_action_at: this.opportunity.nextActionAt,
          owner_unique_id: this.opportunity.ownerUniqueId,  
          owner_name: this.opportunity.ownerName,  
          owner_email: this.opportunity.ownerEmail  
        })
        console.log(this.opportunity)
      }
    }
    ngOnDestroy(): void {
      this.loading = false;
  }
  }