import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'xiaomo-banner',
  template: require('./banner.html'),
  styles:[require('./banner.css')]
})
export class BannerComponent implements OnInit {
  constructor(public ref:ElementRef) {
  }

  ngOnInit() {
    let imgUrl = require('./banner.png');
    let banner = this.ref.nativeElement.querySelector('#banner');
    banner.src = imgUrl;
  }
}
