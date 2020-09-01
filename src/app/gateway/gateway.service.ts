import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { companyKeysData, exchangeSettingsData, SlackChannelData } from './interface';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

  constructor() { }

  addcompanyKeys(
    companyKeysData: companyKeysData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23GATEWAY_URL + '/companykeys/',
      { companyKeys: companyKeysData, });
  }
  addexchangeSettings(
    exchangeSettingsData: exchangeSettingsData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23GATEWAY_URL + '/exchangesettings/',
      { exchangeSettings: exchangeSettingsData, });
  }
  addSlackChannel(
    slackChannelData: SlackChannelData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23GATEWAY_URL + '/slackchannel/',
      { slackChannel: slackChannelData, });
  }

}
