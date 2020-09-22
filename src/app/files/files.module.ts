import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesComponent } from './files/files.component';
import { CategoriesComponent } from './categories/categories.component';



@NgModule({
  declarations: [FilesComponent, CategoriesComponent],
  imports: [
    CommonModule
  ]
})
export class FilesModule { }
