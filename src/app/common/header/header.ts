import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xiaomo-header',
  styles:[require('./header.css')],
  template:require('./header.html')
})
export class HeaderComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
