import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { ProductData, addToCartData, CategoriesData } from './interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  addProduct(
    productData: ProductData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23GATEWAY_URL + '/product/',
      { product: productData, });
  }
  addToCart(
    addToCartData: addToCartData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23GATEWAY_URL + '/addtocart/',
      { addToCart: addToCartData, });
  }
  addCategories(
    categoriesData: CategoriesData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23GATEWAY_URL + '/categories/',
      { categories: categoriesData, });
  }

}
