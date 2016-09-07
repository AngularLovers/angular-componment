import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Logger } from "services";

@Component({
  selector: 'common-radio',
  styles: [require('./common-radio.scss')],
  template: `<button *ngFor="let item of radios;let i = index" [disabled]="!item.isClickAble" 
             [ngClass]="{'active': isActive==i,'disabledButton':!item.isClickAble }" 
             (click)="setActive(i)">{{item.name}}</button> {{value}}`
})
export class CommonRadioComponent implements OnInit {

  @Input() radios: any; //颜色
  isActive: number = 0;
  value: string; //当前选中的value

  constructor() {

  }

  ngOnInit() {
    this.isActive = 0;
    this.value = this.radios[0].name;
  }

  /**
   * 当前选中按钮
   * @param i
   */
  setActive(i) {
    this.isActive = i;
    this.value = this.radios[i].name;
  }

}
