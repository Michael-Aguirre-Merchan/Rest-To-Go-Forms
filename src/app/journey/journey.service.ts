import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { LeadData, AccountData, AccountDetailsData, ContactData,
FollowUpsData, OpportunityData, QuoteData } from './journey.interfaces';

@Injectable({
  providedIn: 'root'
})
export class JourneyService {

  constructor() { }

  addLead(
    leadData: LeadData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23CRM_URL + '/leads/',
      { lead: leadData, });
  }
  addAccount(
    accountData: AccountData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23CRM_URL + '/account/',
      { account: accountData, });
  }
  addAccountDetails(
    accountDetailsData: AccountDetailsData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23CRM_URL + '/accountdetails/',
      { accountDetails: accountDetailsData, });
  }
  addContact(
    contactData: ContactData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23CRM_URL + '/contact/',
      { contact: contactData, });
  }   
  addFollowUps(
    followUpsData: FollowUpsData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23CRM_URL + '/followups/',
      { followUps: followUpsData, });
  }
  addOpportunity(
    opportunityData: OpportunityData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23CRM_URL + '/opportunity/',
      { opportunity: opportunityData, });
  }
  addQuote(
    quoteData: QuoteData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23CRM_URL + '/quote/',
      { quote: quoteData, });
  }

}
