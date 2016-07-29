import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter, OnDestroy } from '@angular/core';
import { Article } from "common";

@Component({
  selector: 'article-search',
  providers: [],
  directives: [],
  pipes: [],
  styles: [require('./article-search.scss')],
  template: require('./article-search.html'),
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleSearchComponent implements OnDestroy {
  @Input() articles: Article [];
  @Output() searchArticle = new EventEmitter();

  ngOnDestroy(): void {
    this.searchArticle.complete();
  }

  search(keyword): void {
    if (keyword) {
      this.searchArticle.emit(keyword);
    }
  }
}
