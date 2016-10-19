import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'board',
  styles:[require('./board.css')],
  template:require('./board.html')
})
export class BoardComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
