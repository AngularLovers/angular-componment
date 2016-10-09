import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xiaomo-banner',
  template: require('./banner.html'),
  styles:[require('./banner.css')]
})
export class BannerComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
