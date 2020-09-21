import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mensaje } from '../models/mensaje.model'
import { RealTimeService } from '../real-time.service';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.scss']
})
export class MensajeComponent implements OnInit, OnDestroy {

  private mensaje: Mensaje;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder, private realTimeService: RealTimeService) { }

  ngOnInit(): void { this.initForm(); }

  initForm() {

    this.dataForm = this.fb.group({
      id: ['', Validators.required],
    unique_id: ['', Validators.required],
    context_id: ['', Validators.required],
    parent_id: ['', Validators.required],
    content: ['', Validators.required],
    source: ['', Validators.required],
    source_alias: ['', Validators.required],
    source_email: ['', Validators.required],
    source_phone: ['', Validators.required],
    target: ['', Validators.required],
    target_alias: ['', Validators.required],
    target_email: ['', Validators.required],
    target_phone: ['', Validators.required],
    value: ['', Validators.required],
    data_source: ['', Validators.required],
    data_source_id: ['', Validators.required],
    data_source_type: ['', Validators.required],
    data_source_alias: ['', Validators.required],
    created_by: ['', Validators.required],
    created_at: ['', Validators.required],
    updated_by: ['', Validators.required],
    updated_at: ['', Validators.required],
    payload: ['', Validators.required],
    });
  }
  submit() {
    if (this.dataForm.valid) {
      this.mensaje = this.dataForm.value;
      this.realTimeService.addMensaje ({
        id: this.mensaje.id,
        unique_id: this.mensaje.uniqueId,
        context_id: this.mensaje.contextId,
        parent_id: this.mensaje.parentId,
        content: this.mensaje.content,
        source: this.mensaje.source,
        source_alias: this.mensaje.sourceAlias,
        source_email: this.mensaje.sourceEmail,
        source_phone: this.mensaje.sourcePhone,
        target: this.mensaje.target,
        target_alias: this.mensaje.targetAlias,
        target_email: this.mensaje.targetEmail,
        target_phone: this.mensaje.targetPhone,
        value: this.mensaje.value,
        data_source: this.mensaje.dataSource,
        data_source_id: this.mensaje.dataSourceId,
        data_source_type: this.mensaje.dataSourceType,
        data_source_alias: this.mensaje.dataSourceAlias,
        created_by: this.mensaje.createdBy,
        created_at: this.mensaje.createdAt,
        updated_by: this.mensaje.updatedBy,
        updated_at: this.mensaje.updatedAt,
        payload: this.mensaje.payload,
      })
      console.log(this.mensaje)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}