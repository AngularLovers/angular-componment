import { Component, OnInit, Input } from '@angular/core';

import { GoodBlogItem } from "./goodBlog-item.model";

@Component({
  selector: 'goodBlog-item',
  styles: [require('./goodBlog-item.scss')],
  template: require('./goodBlog-item.html')
})
export class GoodBlogItemComponent implements OnInit {

  @Input() goodBlogItem:GoodBlogItem;


  constructor() {
  }

  ngOnInit() {
    console.log(this.goodBlogItem);
  }

}
