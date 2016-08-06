import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'web-banner',
  template: require('./web-banner.html'),
  styles: [require('./web-banner.scss')]
})
export class WebBannerComponent implements OnInit {

  clientWidth:number;

  constructor() {
    this.clientWidth = document.body.clientWidth;
    console.log(this.clientWidth);
  }

  ngOnInit() {
  }


}
