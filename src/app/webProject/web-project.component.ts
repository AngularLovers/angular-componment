import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'web-project',
  directives: [],
  pipes: [],
  styles: [require('./web-project.scss')],
  template: require('./web-project.html')
})
export class WebProjectComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log(params.id);
    });
  }
}
