import { Component, OnInit } from "@angular/core";
import { Logger } from "services";

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
