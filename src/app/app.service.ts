import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { ProductsData, addToCartData, CategoriesData } from './interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  addProducts(
    productsData: ProductsData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23GATEWAY_URL + '/products/',
      { products: productsData, });
  }
  addToCart(
    addToCartData: addToCartData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23GATEWAY_URL + '/addToCart/',
      { addToCart: addToCartData, });
  }
  addCategories(
    categoriesData: CategoriesData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23GATEWAY_URL + '/categories/',
      { categories: categoriesData, });
  }

}
