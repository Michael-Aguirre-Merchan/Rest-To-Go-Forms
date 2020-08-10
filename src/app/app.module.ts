import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { JourneyModule } from './journey/journey.module'

@NgModule({
  declarations: [
    AppComponent,
    AddProductsComponent,
    CategoriesComponent,
    AddToCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JourneyModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
