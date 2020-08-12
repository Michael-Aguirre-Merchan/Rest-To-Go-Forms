import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../models/contact'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  private contact: Contact;

  dataForm: FormGroup;

  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void { this.initForm(); }

  initForm() {

    this.dataForm = this.fb.group({
      first_name: ['', Validators.required],
      middle_name: [''],
      last_name: ['', Validators.required],
      primary_email: ['', Validators.required],
      primary_phone: ['', Validators.required],
    });

    onsubmit = () => {
      if (this.dataForm.valid) {
        this.contact = this.dataForm.value;
        console.log(this.contact)
      }
    }
  }
}
