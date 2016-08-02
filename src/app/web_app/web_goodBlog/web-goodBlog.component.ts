import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'web-goodBlog',
  directives: [],
  pipes: [],
  styles: [require('./web-goodBlog.scss')],
  template: require('./web-goodBlog.html')
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
