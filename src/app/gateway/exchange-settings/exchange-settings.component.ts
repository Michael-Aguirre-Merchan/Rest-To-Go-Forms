import { Component, OnInit } from '@angular/core';
import { exchangeSettings } from '../models/exchange-settings.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exchange-settings',
  templateUrl: './exchange-settings.component.html',
  styleUrls: ['./exchange-settings.component.scss']
})
export class ExchangeSettingsComponent implements OnInit {

  private ExchangeSettings: exchangeSettings;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { this.initForm(); }

  initForm() {

    this.dataForm = this.fb.group({
      vhost: ['', Validators.required],
      host: ['', Validators.required],
      user_name: ['', Validators.required],
      encrypted_password: ['', Validators.required],
    });
  }
  submit() {
    if (this.dataForm.valid) {
      this.ExchangeSettings = this.dataForm.value;
      console.log(this.ExchangeSettings)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}