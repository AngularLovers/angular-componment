import { Component, OnInit } from '@angular/core';
import { Logger } from "service";
import {CommonButtonComponent,CommonBadgeComponent,CommonAlertComponent, CommonCanvasComponent,CommonRateComponent,AlertModel } from "common";

@Component({
  selector: 'web-focus',
  pipes: [],
  directives: [CommonButtonComponent,CommonBadgeComponent,CommonAlertComponent,CommonRateComponent,CommonCanvasComponent],
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

  consoleRate(method){
    alert(method);
  }
clickEvent(data){
  alert("click了，msg："+data)
}
  ngOnInit() {

  }
}
