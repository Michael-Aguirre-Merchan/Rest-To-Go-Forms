import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Lead } from '../models/lead.model'
import { JourneyService } from '../journey.service';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.scss']
})
export class LeadComponent implements OnInit, OnDestroy {

  private lead: Lead;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder, private journeyService: JourneyService) { }

  ngOnInit(): void { this.initForm(); }

  initForm() {

    this.dataForm = this.fb.group({
      first_name: ['', Validators.required],
      middle_name: [''],
      last_name: ['', Validators.required],
      phone_number: ['', Validators.required],
      lead_email: ['', Validators.required],
      web_site: [''],
      twitter: [''],
      fb: [''],
      instagram: [''],
      linkedin: [''],
      youtube: [''],
      blog: [''],
      network_a: ['', Validators.required],
      network_b: ['', Validators.required],
      notes: [''],
    });
  }
  submit() {
    if (this.dataForm.valid) {
      this.lead = this.dataForm.value;
      this.journeyService.addLead ({
        first_name: this.lead.firstName,
        middle_name: this.lead.middleName,
        last_name: this.lead.lastName,
        phone_number: this.lead.phoneNumber,
        lead_email: this.lead.leadEmail,
        web_site: this.lead.webSite,
        twitter: this.lead.twitter,
        fb: this.lead.fb,
        instagram: this.lead.instagram,
        linkedin: this.lead.linkedin,
        youtube: this.lead.youtube,
        blog: this.lead.blog,
        network_a: this.lead.networkA,
        network_b: this.lead.networkB,
        notes: this.lead.notes,
      })
      console.log(this.lead)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}
