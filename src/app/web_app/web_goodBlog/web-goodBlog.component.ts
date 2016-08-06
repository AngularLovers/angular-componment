import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoodBlogItemComponent } from "./goodBlog_item/goodBlog-item.component";
import { GoodBlogService } from "./web-goodBlog.service";
import { GoodBlogItem } from "./goodBlog_item/goodBlog-item.model";

@Component({
  selector: 'web-goodBlog',
  directives: [GoodBlogItemComponent],
  providers: [GoodBlogService],
  pipes: [],
  styles: [require('./web-goodBlog.scss')],
  template: require('./web-goodBlog.html')
})
export class WebGoodBlogComponent implements OnInit {

  goodBlog:GoodBlogItem[] = [];

  constructor(private goodBlogService: GoodBlogService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.goodBlogService.getGoodBlogItems().then(res=>{this.goodBlog = res});
    this.activatedRoute.params.subscribe((params: any) => {
      console.log(params.id);
    });
  }
}
