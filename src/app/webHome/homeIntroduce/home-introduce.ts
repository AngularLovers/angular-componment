import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'web-introduce',
  template: require('./home-introduce.html'),
  styles:[require('./home-introduce.scss')]
})
export class WebIntroduceComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }


}
