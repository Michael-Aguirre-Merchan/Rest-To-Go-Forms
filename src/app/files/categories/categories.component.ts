import { Component, OnInit, OnDestroy } from '@angular/core';
import { Categories } from '../models/categories.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilesService } from '../files.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {

  private categories: Categories;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder, private filesService: FilesService) { }

  ngOnInit(): void { this.initForm(); }

  initForm() {

    this.dataForm = this.fb.group({
      unique_id: ['', Validators.required],  
        code: ['', Validators.required],  
        name: ['', Validators.required],  
        description: ['', Validators.required],  
        parent_id: ['', Validators.required],  
        display_order: ['', Validators.required],  
        image_url: ['', Validators.required],  
        content_url: ['', Validators.required],  
        status: ['', Validators.required],  
        enabled: ['', Validators.required],  
        payload: ['', Validators.required],
    });
  }
  submit() {
    if (this.dataForm.valid) {
      this.categories = this.dataForm.value;
      this.filesService.addCategories ({ 
        unique_id: this.categories.uniqueId ,  
        code: this.categories.code ,  
        name: this.categories.name ,  
        description: this.categories.description ,  
        parent_id: this.categories.parentId ,
        display_order: this.categories.displayOrder ,  
        image_url: this.categories.imageUrl ,  
        content_url: this.categories.contentUrl ,  
        status: this.categories.status ,  
        enabled: this.categories.enabled ,  
        payload: this.categories.payload ,
      });
      console.log(this.categories)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}