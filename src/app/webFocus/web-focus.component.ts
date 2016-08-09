import { Component, OnInit } from '@angular/core';
import { CommonAlertComponent } from "../common/commonAlerts/common-alert.component";
import { AlertModel } from "../common/commonAlerts/common-alert.model";

@Component({
  selector: 'web-focus',
  pipes: [],
  directives: [CommonAlertComponent],
  styles: [
    require('./web-focus.scss')
  ],
  template: require('./web-focus.html')
})
export class WebFocusComponent implements OnInit {
  // 要传递的消息
  alerts: Array<AlertModel> = [];

  constructor() {
    this.alerts = [
      {
        type: 'info',
        msg: '这是一个提示危险的消息.',
        dismissTime: 30000,
        closable: true
      },
      {
        type: 'success',
        msg: '这是一个提示成功的消息.',
        dismissTime: 30000,
        closable: true
      }
    ]
  }

  ngOnInit() {

  }
}
