import { Component, OnInit, OnDestroy } from '@angular/core';
import { Categories } from '../models/categories.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {

  private category: Categories;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder, private productsService: ProductsService) { }

  ngOnInit(): void { this.initForm(); }

  initForm() {

    this.dataForm = this.fb.group({
      id: ['', Validators.required],
      uniqueId: ['', Validators.required],
      code: ['', Validators.required],
      name: ['', Validators.required],
      description: [''],
      imageUrl: ['', Validators.required],
      parentId: ['', Validators.required],
      displayOrder: ['', Validators.required],
      contentUrl: ['', Validators.required],
      status: ['', Validators.required],
      enabled: ['', Validators.required],
      payload: ['', Validators.required],
    });
  }
  submit() {
    if (this.dataForm.valid) {
      this.category = this.dataForm.value;
      this.productsService.addCategories ({ 
        id: this.category.id, 
        uniqueId: this.category.uniqueId,
        code: this.category.code,
        name: this.category.name,
        description: this.category.description,
        imageUrl: this.category.imageUrl,
        parentId: this.category.id,
        displayOrder: this.category.id,
        contentUrl: this.category.contentUrl,
        status: this.category.status,
        enabled: this.category.enabled,
        payload: this.category.payload,
      });
      console.log(this.category)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}