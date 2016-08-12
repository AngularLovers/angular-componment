import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";

@Component({
  selector: 'common-modal',
  template: require('./modals.html'),
  styles: [require('./modal.scss')],
})

export class CommonModalComponent implements OnInit {

  @Input() btnName:string; //按钮名字
  @Input() color:string; // 颜色
  @Input() title:string; //标题
  @Input() size:string; // 大小
  @Input() key:string; // 主键

  ngOnInit() {

  }

}
