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

  constructor(private fb: FormBuilder) { 

    this.dataForm = this.fb.group({
      first_name: ['', Validators.required],
      middle_name: ['', Validators.required],
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

    onsubmit = () => {
      if (this.dataForm.valid) {
        this.lead = this.dataForm.value;
        console.log(this.lead)
      }
    }
  }

  ngOnInit(): void {
  }

}
