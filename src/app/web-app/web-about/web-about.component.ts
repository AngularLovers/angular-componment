import { Component, OnInit } from '@angular/core';
import { AboutService } from './web-about.service';
import { ArticleItemComponent } from '../article-item';

@Component({
  selector: 'web-about',
  providers: [AboutService],
  directives: [ArticleItemComponent],
  styles: [],
  template: require('./web-about.html')
})
export class WebAboutComponent implements OnInit {
  private article: any;

  constructor(private aboutService: AboutService) {

  }

  ngOnInit() {
    this.aboutService.getArticle()
      .subscribe(result => this.article = result);
  }
}
