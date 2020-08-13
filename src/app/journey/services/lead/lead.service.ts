import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lead } from '../../models/lead';

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  app_id = 'hdv9G16XPu3AuA';
  company_token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX3VuaXF1ZV9pZCI6IjVhODVkNTMyLTU2NTItNDJlMy05YmU0LWNhYmNhMjcwMDcwYiIsInVzZXJfcHJvdmlkZXIiOiJlbWFpbCIsInVzZXJfdWlkIjoibmRlbWFyY29AM21ldGFzLmNvbSIsInVzZXJfZW1haWwiOiJuZGVtYXJjb0AzbWV0YXMuY29tIiwiY29tcGFueV91bmlxdWVfaWQiOiIwNzAyZDFkZS0yNzMwLTQzZTItYWIxMi05YWEyNzRjYjJiYzkiLCJzY2hlbWFfbmFtZSI6ImVjY2JlNzNlIiwidXNlcl9yb2xlX2lkIjo0LCJjc3JmX3Rva2VuIjoiQ3JWZU0wTFJUNDZ4OXhIcWwxUHlqOFIrR3lGam5DMlZ6NGsxL2RhT2FYaz0iLCJleHAiOjE1OTQ4NDgxNzN9.CT8sGTb9cX6SjLWSpNeRhcJq1jZdkN3zYTEH4ZWwVwQ';
 
  private url = 'https://stage-forms.23blocks.com/forms'
 
  constructor(private http: HttpClient) {
  }
 
  getRes(myform: Lead) {
    const data = {...myform}
        const httpOptions = {
      headers: new HttpHeaders({
        'APPID': this.app_id,
        'company-token': this.company_token
      })
    };
    return this.http.post(this.url, { form: data }, httpOptions).subscribe(res => console.log(res));
  }

}
