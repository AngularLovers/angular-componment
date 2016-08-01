import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'web-good-blog',
  directives: [],
  pipes: [],
  styles: [require('./web-good-blog.scss')],
  template: require('./web-good-blog.html')
})
export class WebGoodBlogComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log(params.id);
    });
  }
}
