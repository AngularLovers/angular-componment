import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'web-banner',
  template: require('./web-banner.html'),
  styles: [require('./web-banner.scss')]
})
export class WebBannerComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }


}
