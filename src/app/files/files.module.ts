import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesComponent } from './files/files.component';
import { CategoriesComponent } from './categories/categories.component';
import { PresignUploadComponent } from './presign-upload/presign-upload.component';



@NgModule({
  declarations: [FilesComponent, CategoriesComponent, PresignUploadComponent],
  imports: [
    CommonModule
  ]
})
export class FilesModule { }
