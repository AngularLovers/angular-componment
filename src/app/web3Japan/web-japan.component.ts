import { Component, OnInit } from "@angular/core";
import { Logger } from "service";

@Component({
  selector: 'web-focus',
  pipes: [],
  directives: [],
  styles: [
    require('./web-janpan.scss')
  ],
  template: require('./web-japan.html')
})
export class WebJapanComponent implements OnInit {

  ngOnInit() {

  }
}
