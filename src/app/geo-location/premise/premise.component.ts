import { Component, OnInit, OnDestroy } from '@angular/core';
import { Premise } from '../models/premise.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeoService } from '../geo.service';

@Component({
  selector: 'app-premise',
  templateUrl: './premise.component.html',
  styleUrls: ['./premise.component.scss']
})
export class PremiseComponent implements OnInit, OnDestroy {

  dataForm: FormGroup;
  
  private premise: Premise;

  constructor(private fb: FormBuilder, private geoService: GeoService) { }

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
      this.geoService.addPremise ({ 
        parent_id: this.premise.parentId, 
        premise_type: this.premise.premiseType,
        floor: this.premise.floor,
        code: this.premise.code,
        name: this.premise.name,
        description: this.premise.description,
        access_instructions: this.premise.accessInstructions,
        additional_instructions: this.premise.additionalInstructions,
        source: this.premise.source,
        source_alias: this.premise.sourceAlias,
        source_id: this.premise.sourceId,
        source_typenotes: this.premise.sourceTypenotes,
      });
      console.log(this.premise)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}
