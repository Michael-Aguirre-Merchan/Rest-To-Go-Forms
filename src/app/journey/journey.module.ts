import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { ContactComponent } from './contact/contact.component';
import { LeadComponent } from './lead/lead.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [AccountComponent, ContactComponent, LeadComponent],
  imports: [
    CommonModule,
	ReactiveFormsModule
  ]
})
export class JourneyModule { }
