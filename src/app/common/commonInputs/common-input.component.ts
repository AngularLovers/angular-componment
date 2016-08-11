import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";

@Component({
  selector: 'common-input',
  template: require('./common-input.html'),
})
export class CommonInputComponent implements OnInit {

  @Input() inputType:string; //input的类型
  @Input() isRound:boolean; // 是否是圆角
  @Input() info:string; //placeholder
  @Input() label:string; //提示


  constructor() {
    if(!this.inputType){
      this.inputType="text";
    }
    if(!this.info){
      this.info="please input...";
    }
    if(!this.label){
      this.label="输入框";
    }
  }

  ngOnInit(){

  }
}
