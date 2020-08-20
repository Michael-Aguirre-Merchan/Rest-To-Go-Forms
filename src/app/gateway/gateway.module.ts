import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlackChannelComponent } from './slack-channel/slack-channel.component';
import { CompanyKeysComponent } from './company-keys/company-keys.component';
import { ExchangeSettingsComponent } from './exchange-settings/exchange-settings.component';



@NgModule({
  declarations: [SlackChannelComponent, CompanyKeysComponent, ExchangeSettingsComponent],
  imports: [
    CommonModule
  ]
})
export class GatewayModule { }
