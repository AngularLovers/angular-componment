import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Logger } from "service";

@Component({
  selector: 'common-radio',
  styles: [require('./common-radio.scss')],
  template: `<button *ngFor="let item of radios"  [ngClass]="{'active': isActive}" (click)="setActive($event)">{{item.name}}</button>`
})
export class CommonRadioComponent implements OnInit {

  @Input() radios: any; //颜色
  isActive: boolean = false;

  constructor() {
  }

  ngOnInit() {

  }

  setActive(event) {
    Logger.alert(event.target);
  }


}
