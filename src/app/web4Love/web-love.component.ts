import { Component, OnInit } from "@angular/core";
import { Logger } from "service";

@Component({
  selector: 'web-works',
  pipes: [],
  directives: [],
  styles: [
    require('./web-love.scss')
  ],
  template: require('./web-love.html')
})
export class WebLoveComponent implements OnInit {

  ngOnInit() {

  }
}
