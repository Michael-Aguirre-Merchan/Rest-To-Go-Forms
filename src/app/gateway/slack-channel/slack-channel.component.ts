import { Component, OnInit } from '@angular/core';
import { SlackChannel } from '../models/slack-channel.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-slack-channel',
  templateUrl: './slack-channel.component.html',
  styleUrls: ['./slack-channel.component.scss']
})
export class SlackChannelComponent implements OnInit {

  private slackChannel: SlackChannel;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { this.initForm(); }

  initForm() {

    this.dataForm = this.fb.group({
      slack_hook: ['', Validators.required],
      slack_channel: ['', Validators.required],
      slack_username: ['', Validators.required],
    });
  }
  submit() {
    if (this.dataForm.valid) {
      this.slackChannel = this.dataForm.value;
      console.log(this.slackChannel)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}
