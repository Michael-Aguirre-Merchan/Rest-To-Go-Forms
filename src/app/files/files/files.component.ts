import { Component, OnInit, OnDestroy } from '@angular/core';
import { Files } from '../models/files.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilesService } from '../files.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit, OnDestroy {

  private files: Files;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder, private filesService: FilesService) { }

  ngOnInit(): void { this.initForm(); }

  initForm() {

    this.dataForm = this.fb.group({
      unique_id: ['', Validators.required],
      user_identity_unique_id: ['', Validators.required],  
      user_unique_id: ['', Validators.required],  
      status: ['', Validators.required],
      enabled: ['', Validators.required],  
      bucket: ['', Validators.required], 
      name: ['', Validators.required], 
      url: ['', Validators.required],  
      thumbnail: ['', Validators.required],  
      file_type: ['', Validators.required], 
      file_size: ['', Validators.required], 
      description: ['', Validators.required],  
      original_name: ['', Validators.required], 
      original_file: ['', Validators.required],  
      category_unique_id: ['', Validators.required],  
      category_name: ['', Validators.required],  
      created_by: ['', Validators.required],  
      updated_by: ['', Validators.required],  
      payload: ['', Validators.required]
    });
  }
  submit() {
    if (this.dataForm.valid) {
      this.files = this.dataForm.value;
      this.filesService.addFiles ({ 
        unique_id: this.files.uniqueId ,
        user_identity_unique_id: this.files.userIdentityUniqueId ,  
        user_unique_id: this.files.userUniqueId ,  
        status: this.files.status ,
        enabled: this.files.enabled ,  
        bucket: this.files.bucket , 
        name: this.files.name , 
        url: this.files.url ,  
        thumbnail: this.files.thumbnail ,  
        file_type: this.files.fileType , 
        file_size: this.files.fileSize , 
        description: this.files.description ,  
        original_name: this.files.originalName , 
        original_file: this.files.originalFile ,  
        category_unique_id: this.files.categoryUniqueId ,  
        category_name: this.files.categoryName ,  
        created_by: this.files.createdBy ,  
        updated_by: this.files.updatedBy ,  
        payload: this.files.payload
      });
      console.log(this.files)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}