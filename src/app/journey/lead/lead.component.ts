import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Lead } from '../models/lead'

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.scss']
})
export class LeadComponent implements OnInit {

  private lead: Lead;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder) { }

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
      network_a: [''],
      network_b: [''],
      notes: [''],
    });
  }
  Submit() {
    if (this.dataForm.valid) {
      this.lead = this.dataForm.value;
      console.log(this.lead)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}
