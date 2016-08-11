import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: 'common-tag',
  styles: [require('./common-tag.scss')],
  template: `<span class="label label-{{color}} {{size}}">{{msg}}</span>`
})
export class CommonTagComponent implements OnInit {

  @Input() color: string; //颜色
  @Input() size: string; // 大小
  @Input() msg: string; // 内容


  constructor() {
    if (!this.color) {
      this.color = "success";
    }
    if (!this.msg) {
      this.msg = "标签";
    }
  }

  ngOnInit() {
  }


}
