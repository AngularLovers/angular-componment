import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'web-banner',
  template: require('./home-banner.html'),
  styles: [require('./home-banner.scss')]
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
