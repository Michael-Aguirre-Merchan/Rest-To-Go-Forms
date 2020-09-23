import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { CategoriesData, FilesData } from './files.interface';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor() { }

  addCategories(
    categoriesData: CategoriesData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23GATEWAY_URL + '/categories/',
      { categories: categoriesData, });
  }
  addFiles(
    filesData: FilesData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23GATEWAY_URL + '/files/',
      { filesData: filesData, });
  }

}