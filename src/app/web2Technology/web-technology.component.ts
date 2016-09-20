import { Component, OnInit } from '@angular/core';
import { GoodBlogService } from "./web-technology.service";

@Component({
  selector: 'web-goodBlog',
  styles: [require('./web-technology.scss')],
  template: require('./web-technology.html')
})
export class WebTechnologyComponent implements OnInit {

  goodBlogItems;

  constructor(private goodBlogService: GoodBlogService
  ) {

  }

  ngOnInit() {
    this.goodBlogService.getGoodBlogItems().subscribe(res=> {
      this.goodBlogItems = res;
    });
    // this.activatedRoute.params.subscribe((params: any) => {
    //   console.log(params.id);
    // });
  }
}
