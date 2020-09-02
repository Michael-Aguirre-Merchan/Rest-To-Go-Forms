import { Component, OnInit, OnDestroy } from '@angular/core';
import { Campaign } from '../models/campaign.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CampaignsService } from '../campaigns.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit, OnDestroy {

  private campaign: Campaign;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder, private campaignService: CampaignsService) { }
  
  ngOnInit(): void { this.initForm(); }

  initForm() {
    
    this.dataForm = this.fb.group({
      name: ['', Validators.required],
      duration: ['', Validators.required],
      duration_unit: ['', Validators.required],
      budget: ['', Validators.required]
    });
  }
  submit()  {
    if (this.dataForm.valid) {
      this.campaign = this.dataForm.value;
      this.campaignService.addCampaign ({
        name: this.campaign.name,
        duration: this.campaign.duration,
        duration_unit: this.campaign.durationUnit,
        budget: this.campaign.budget
      });
      console.log(this.campaign)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
}

}
