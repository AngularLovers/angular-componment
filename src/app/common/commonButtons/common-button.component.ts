import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'common-button',
  styles: [require('./common-button.scss')],
  template: `<button type="button" (click)="onClick(msg)" [ngClass]="{'btn-radius': isRadius}" class="btn {{color}} {{size}}" ><i class="{{icon}}"></i>{{msg}}</button>`
})
export class CommonButtonComponent implements OnInit {

  @Input() color: string; //颜色
  @Input() size: string; //大小
  @Input() isRadius: boolean; //是否是圆角
  @Input() icon: string; //图标
  @Input() msg: string; //按钮内容
  @Input() isClickAble: boolean; //是否可点击
  @Output() clickEvent: EventEmitter<Object> = new EventEmitter();

  constructor() {
    if (!this.color) {
      this.color = "btn-success";
    }

    if (!this.size) {
      this.size = "btn-sm";
    }

    if (!this.icon) {
      this.icon = "";
    }

    if (!this.msg) {
      this.msg = "确定";
    }
  }
onClick(agreed: string){
   this.clickEvent.emit(agreed);
}
  ngOnInit() {
    // this.clickEvent.emit(1);
  }


  ngAfterViewInit() {
    if (!this.isClickAble) {
    }
  }

}
