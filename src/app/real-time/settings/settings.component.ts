import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Settings } from '../models/settings.model'
import { RealTimeService } from '../real-time.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {

  private settings: Settings;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder, private realTimeService: RealTimeService) { }

  ngOnInit(): void { this.initForm(); }

  initForm() {

    this.dataForm = this.fb.group({
      unique_id: ['', Validators.required],
      user_unique_id: ['', Validators.required],  
      mail_optin: ['', Validators.required],  
      mail_updated_at: ['', Validators.required],
      sms_optin: ['', Validators.required],  
      sms_updated_at: ['', Validators.required],  
      whatsapp_optin: ['', Validators.required],  
      whatsapp_updated_at: ['', Validators.required],  
      notifications_optin: ['', Validators.required],  
      notifications_updated_at: ['', Validators.required],  
      location_optin: ['', Validators.required],  
      location_updated_at: ['', Validators.required],  
      payload: ['', Validators.required],
      status: ['', Validators.required],  
      enabled: ['', Validators.required],
      
    });
  }
  submit() {
    if (this.dataForm.valid) {
      this.settings = this.dataForm.value;
      this.realTimeService.addSettings ({
        unique_id: this.settings.uniqueId ,
        user_unique_id: this.settings.userUniqueId ,  
        mail_optin: this.settings.mailOptin ,  
        mail_updated_at: this.settings.mailUpdatedAt ,
        sms_optin: this.settings.smsOptin ,  
        sms_updated_at: this.settings.smsUpdatedAt ,  
        whatsapp_optin: this.settings.whatsappOptin ,  
        whatsapp_updated_at: this.settings.whatsappUpdatedAt ,  
        notifications_optin: this.settings.notificationsOptin ,  
        notifications_updated_at: this.settings.notificationsUpdatedAt ,  
        location_optin: this.settings.locationOptin ,  
        location_updated_at: this.settings.locationUpdatedAt ,  
        payload: this.settings.payload ,
        status: this.settings.status ,  
        enabled: this.settings.enabled ,
      })
      console.log(this.settings)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}
