import { Component, OnInit, OnDestroy } from '@angular/core';
import { exchangeSettings } from '../models/exchangesettings.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GatewayService } from '../gateway.service';

@Component({
  selector: 'app-exchange-settings',
  templateUrl: './exchange-settings.component.html',
  styleUrls: ['./exchange-settings.component.scss']
})
export class ExchangeSettingsComponent implements OnInit, OnDestroy {

  private ExchangeSettings: exchangeSettings;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder, private gatewayService: GatewayService) { }

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
      this.gatewayService.addexchangeSettings ({ 
        vhost: this.ExchangeSettings.vhost, 
        host: this.ExchangeSettings.host,
        user_name: this.ExchangeSettings.userName,
        encrypted_password: this.ExchangeSettings.encryptedPassword,
      });
      console.log(this.ExchangeSettings)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}