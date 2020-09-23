import { Component, OnInit, OnDestroy } from '@angular/core';
import { PresignUpload } from '../models/presign-upload.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilesService } from '../files.service';

@Component({
  selector: 'app-presign-upload',
  templateUrl: './presign-upload.component.html',
  styleUrls: ['./presign-upload.component.scss']
})
export class PresignUploadComponent implements OnInit , OnDestroy {

  private presignUpload: PresignUpload;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder, private filesService: FilesService) { }

  ngOnInit(): void { this.initForm(); }

  initForm() {

    this.dataForm = this.fb.group({
      filename: ['', Validators.required],
    });
  }
  submit() {
    if (this.dataForm.valid) {
      this.presignUpload = this.dataForm.value;
      this.filesService.addPresignUpload ({ 
        filename: this.presignUpload.filename
      });
      console.log(this.presignUpload)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}