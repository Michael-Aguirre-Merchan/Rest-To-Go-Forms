import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductsComponent,
    CategoriesComponent,
    AddToCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
