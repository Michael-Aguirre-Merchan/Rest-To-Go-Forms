import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { AccountComponent } from './journey/account/account.component';
import { ContactComponent } from './journey/contact/contact.component';
import { LeadComponent } from './journey/lead/lead.component';
import { GeoComponent } from './geo-location/geo/geo.component';
import { AreaComponent } from './geo-location/area/area.component';
import { LocationComponent } from './geo-location/location/location.component';
import { LocationHoursComponent } from './geo-location/location-hours/location-hours.component';
import { PremiseComponent } from './geo-location/premise/premise.component'
import { QuoteComponent } from './journey/quote/quote.component';
import { OpportunityComponent } from './journey/opportunity/opportunity.component';
import { FollowUpsComponent } from './journey/follow-ups/follow-ups.component';
import { AccountDetailsComponent } from './journey/account-details/account-details.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: AddProductsComponent,
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'lead',
    component: LeadComponent,
  },
  {
    path: 'cart',
    component: AddToCartComponent,
  },
  {
    path: 'geo',
    component: GeoComponent
  },
  {
    path: 'area',
    component: AreaComponent
  },
  {
    path: 'loc',
    component: LocationComponent
  },
  {
    path: 'lh',
    component: LocationHoursComponent
  },
  {
    path: 'premise',
    component: PremiseComponent
  },
  {
    path: 'quote',
    component: QuoteComponent
  },
  {
    path: 'opportunity',
    component: OpportunityComponent
  },
  {
    path: 'follow',
    component: FollowUpsComponent
  },
  {
    path: 'ad',
    component: AccountDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
