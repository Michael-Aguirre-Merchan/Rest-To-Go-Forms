import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../models/contact.model'
import { JourneyService } from '../journey.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  private contact: Contact;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder, private journeyService: JourneyService) { }

  ngOnInit(): void { this.initForm(); }

  initForm() {

    this.dataForm = this.fb.group({
      first_name: ['', Validators.required],
      middle_name: [''],
      last_name: ['', Validators.required],
      primary_email: ['', Validators.required],
      primary_phone: ['', Validators.required],
    });
  }
  submit() {
    if (this.dataForm.valid) {
      this.contact = this.dataForm.value;
      this.journeyService.addContact ({
        first_name: this.contact.firstName,
        middle_name: this.contact.middleName, 
        last_name: this.contact.lastName,
        primary_email: this.contact.primaryEmail,
        primary_phone: this.contact.primaryPhone,
      })
      console.log(this.contact)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}
