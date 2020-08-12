import { Component, OnInit } from '@angular/core';
import {Categories} from '../models/categories.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  private category: Categories;

  dataForm: FormGroup;

  constructor(private fb: FormBuilder) {  }
  
  ngOnInit(): void { this.initForm(); }

  initForm() {

    this.dataForm = this.fb.group({
      id: ['456251', Validators.required],
      uniqueId: ['', Validators.required],
      code: ['', Validators.required],
      name: ['', Validators.required],
      description: ['desc-example'],
      imageUrl: ['', Validators.required],
      parentId: ['', Validators.required],
      displayOrder: ['', Validators.required],
      contentUrl: ['', Validators.required],
      status: ['', Validators.required],
      enabled: ['', Validators.required],
      payload: ['', Validators.required],
    });
    onsubmit = () => {
      if (this.dataForm.valid) {
        this.category = this.dataForm.value;
        console.log(this.category)
      }
    }
  }

}
