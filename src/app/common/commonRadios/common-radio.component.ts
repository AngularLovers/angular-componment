import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Logger } from "service";

@Component({
  selector: 'common-radio',
  styles: [require('./common-radio.scss')],
  template: `<button *ngFor="let item of radios;let i = index"  [ngClass]="{'active': isActive==i}" (click)="setActive(i)">{{item.name}}</button> {{value}}`
})
export class CommonRadioComponent implements OnInit {

  @Input() radios: any; //颜色
  isActive: number = 0;
  value:string; //当前选中的value

  constructor() {

  }

  ngOnInit() {
    this.value = this.radios[0].name;
  }

  /**
   * 当前选中按钮
   * @param id
   */
  setActive(id) {
    this.isActive = id;
    this.value = this.radios[id].name;
  }


}
