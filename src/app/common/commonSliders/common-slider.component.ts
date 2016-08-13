import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'common-slider',
  styles: [require('./common-slider.scss')],
  template: require('./common-slider.html')
})
export class CommonSliderComponent implements OnInit {

  @Input() name:string;
  @Input() max:number;
  @Input() current:number;

  constructor() {
  }

  ngOnInit() {
    if (!this.current){
      this.current = 1;
    }
    if (!this.max){
      this.max=10;
    }
  }


}
