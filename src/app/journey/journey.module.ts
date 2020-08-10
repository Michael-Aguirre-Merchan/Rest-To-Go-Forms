import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { ContactComponent } from './contact/contact.component';
import { LeadComponent } from './lead/lead.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: AccountComponent,
		children: [
			{
				path: '',
				redirectTo: 'account',
				pathMatch: 'full'
			},
			{
				path: 'account',
				component: AccountComponent,
			},
			{
				path: 'contact',
				component: ContactComponent
      },
      {
				path: 'lead',
				component: LeadComponent
      }
		]
	}
];

@NgModule({
  declarations: [AccountComponent, ContactComponent, LeadComponent],
  imports: [
    CommonModule,
		RouterModule.forChild(routes),
  ]
})
export class JourneyModule { }
