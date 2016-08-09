import { Component, OnInit } from '@angular/core';
import { CommonAlertComponent } from "../common/commonAlerts/common-alert.component";
import { AlertModel } from "../common/commonAlerts/common-alert.model";
import { CommonRateComponent } from "../common/commonRates/common-rate.component";
import { Logger } from "service";

@Component({
  selector: 'web-focus',
  pipes: [],
  directives: [CommonAlertComponent,CommonRateComponent],
  styles: [
    require('./web-focus.scss')
  ],
  template: require('./web-focus.html')
})
export class WebFocusComponent implements OnInit {
  // 要传递的消息
  alerts: Array<AlertModel> = [];


  /**
   * 评分组件需要的参数
   */
  max: number = 5;
  rate: number = 3;
  isReadOnly: boolean = false;

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

  /**
   * 执行操作
   * @param rate
   */
  alertRate(rate){
    Logger.alert(rate);
  }

  ngOnInit() {

  }
}
