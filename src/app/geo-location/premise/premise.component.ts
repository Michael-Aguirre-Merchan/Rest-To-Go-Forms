import { Component, OnInit } from '@angular/core';
import { Premise } from '../models/premise.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-premise',
  templateUrl: './premise.component.html',
  styleUrls: ['./premise.component.scss']
})
export class PremiseComponent implements OnInit {

  dataForm: FormGroup;
  
  private premise: Premise;

  constructor(private fb: FormBuilder) { }

  loading = false;

  ngOnInit( ): void {
    this.initForm();
  }

  initForm() { 
    this.dataForm = this.fb.group({

      parent_id: ['', Validators.required], 
      premise_type: ['', Validators.required],
      floor: [''],
      code: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      access_instructions: ['', Validators.required],
      additional_instructions: [''],
      source: ['', Validators.required],
      source_alias: ['', Validators.required],
      source_id: ['', Validators.required],
      source_typenotes: ['', Validators.required],
      
    });
  }
  submit() {
    if (this.dataForm.valid) {
      this.premise = this.dataForm.value;
      console.log(this.premise)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}
