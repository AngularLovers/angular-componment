import { Component, OnInit, ElementRef } from '@angular/core';
import { ArticleItemComponent } from '../article-item';
import { PagerComponent} from 'common';
import { RebirthWindow } from 'rebirth-common';

@Component({
  selector: 'article-list',
  directives: [ArticleItemComponent, PagerComponent],
  pipes: [],
  styles: [require('./article-list.scss')],
  template: require('./article-list.html')
})
export class ArticleListComponent implements OnInit {
  constructor(private elmRef: ElementRef, private rebirthWindow: RebirthWindow) {

  }

  ngOnInit() {
    this.pageChange(1);
  }

  pageChange(pageIndex) {
    console.log(pageIndex);
  }

}
