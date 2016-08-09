import {Component, Input , OnInit} from '@angular/core';

let template = require('./commonSearch.html');
let searchStyle = require('./commonSearch.scss');

@Component({
  moduleId: module.id,
  selector: 'common-search',
  template:template,
  styles:[searchStyle]
})
export class CommonSearchComponent implements OnInit {

  @Input() widthSize:number;

  constructor() {
  }

  ngOnInit() {
  }


}
