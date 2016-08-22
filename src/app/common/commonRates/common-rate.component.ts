import { Component } from '@angular/core';

import { Input } from "@angular/core";
import { Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

// webpack html imports
let template = require('./common-rate.html');

@Component({
  selector: 'common-rate',
  template: template
})
export class CommonRateComponent {
  /**
   * 最大星个数
   * @type {number}
   */
  @Input() max: number ;
  /**
   * 当前默认星个数
   * @type {number}
   */
  @Input() rate: number ;

  /**
   * 是否只读
   * @type {boolean}
   */
  @Input() isReadonly: boolean;

  @Output() submitRate = new EventEmitter<Number>();

  /**
   *
   */
  public overStar: number;

  /**
   * 百分比 rate*10
   */
  public percent: number;


  constructor() {
    if (this.max <= 0) {
      this.max = 5;
    }
    if (this.rate <= 0) {
      this.rate = 0;
    }
  }

  /**
   * 当鼠标移过的时候计算百分比(始终都是百分之百)
   * @param value
   */
  public hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = 100 * (value / this.max);
  };


  /**
   * 置为0星
   */
  public resetStar(): void {
    this.overStar = void 0;
  }

  /**
   * 向上传递信息
   */
  public submitRateOperate(){
    this.submitRate.emit(this.rate);
  }
}
