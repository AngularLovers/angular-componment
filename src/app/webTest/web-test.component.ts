import { Component, OnInit } from "@angular/core";
import { Logger } from "service";
import {
  CommonRadioComponent,
  CommonInputComponent,
  CommonTagComponent,
  CommonButtonComponent,
  CommonBadgeComponent,
  CommonAlertComponent,
  CommonCanvasComponent,
  CommonRateComponent,
  AlertModel
} from "common";

@Component({
  selector: 'web-test',
  pipes: [],
  directives: [CommonRadioComponent,CommonInputComponent, CommonTagComponent, CommonButtonComponent, CommonBadgeComponent, CommonAlertComponent, CommonRateComponent, CommonCanvasComponent],
  styles: [
    require('./web-test.scss')
  ],
  template: require('./web-test.html')
})
export class WebTestComponent implements OnInit {
  // 要传递的消息
  alerts: Array<AlertModel> = [];
  radios: Array<Object> = [];


  /**
   * 评分组件需要的参数
   */
  max: number = 5;
  rate: number = 3;
  isReadOnly: boolean = false;

  constructor() {
    this.radios = [
      {
        "name": "北京"
      },
      {
        "name": "上海"
      },
      {
        "name": "杭州"
      },
      {
        "name": "深圳"
      },
      {
        "name": "苏州"
      }
    ];
    this.alerts = [
      {
        type: 'info',
        msg: '这是一个提示消息.',
        dismissTime: 30000,
        closable: true
      },
      {
        type: 'warning',
        msg: '这是一个提示警告的消息.',
        dismissTime: 30000,
        closable: true
      },
      {
        type: 'danger',
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
  alertRate(rate) {
    Logger.alert(rate);
  }

  /**
   * 供子组件调用的方法
   */
  clickEvent() {
    Logger.alert("...............");
  }

  ngOnInit() {

  }
}
