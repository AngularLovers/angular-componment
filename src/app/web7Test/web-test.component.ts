import { Component, OnInit } from "@angular/core";
import { Logger } from "services";
import {
  CommonCkeditorComponent,
  CommonBaiduComponent,
  CommonModalComponent,
  CommonRadioComponent,
  CommonInputComponent,
  CommonTagComponent,
  CommonButtonComponent,
  CommonBadgeComponent,
  CommonCanvasComponent,
  CommonSliderComponent
} from "common";

@Component({
  selector: 'web-test',
  pipes: [],
  directives: [
    CommonCkeditorComponent,
    CommonBaiduComponent,
    CommonSliderComponent,
    CommonModalComponent,
    CommonRadioComponent,
    CommonInputComponent,
    CommonTagComponent,
    CommonButtonComponent,
    CommonBadgeComponent,
    CommonCanvasComponent],
  styles: [
    require('./web-test.scss')
  ],
  template: require('./web-test.html')
})
export class WebTestComponent implements OnInit {
  // 要传递的消息
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
        "name": "北京",
        "isClickAble":true
      },
      {
        "name": "上海",
        "isClickAble":false

      },
      {
        "name": "杭州",
        "isClickAble":true
      },
      {
        "name": "深圳",
        "isClickAble":true
      },
      {
        "name": "苏州",
        "isClickAble":false
      }
    ];
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
