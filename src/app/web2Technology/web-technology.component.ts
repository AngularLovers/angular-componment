import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { GoodBlogItemComponent } from "./goodBlogItem/goodBlog-item.component";
import { GoodBlogService } from "./web-technology.service";

@Component({
  selector: 'web-goodBlog',
  directives: [GoodBlogItemComponent],
  providers: [GoodBlogService],
  pipes: [],
  styles: [require('./web-technology.scss')],
  template: require('./web-technology.html')
})
export class WebTechnologyComponent implements OnInit {

  goodBlogItems;

  constructor(private goodBlogService: GoodBlogService,
              // private activatedRoute: ActivatedRoute
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
