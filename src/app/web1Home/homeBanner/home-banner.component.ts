import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'web-banner',
  template: require('./home-banner.html'),
  styles: [require('./home-banner.scss')]
})
export class WebBannerComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }


}
