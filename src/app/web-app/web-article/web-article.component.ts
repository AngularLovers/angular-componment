import { Component, OnInit } from '@angular/core';
import { ArticleService, Article } from 'common';
import { ArticleItemComponent } from '../article-item';
import { ActivatedRoute } from '@angular/router';
import { DuoShuoCommentComponent } from '../duoshuo-comment';

@Component({
  selector: 'web-article',
  directives: [ArticleItemComponent, DuoShuoCommentComponent],
  pipes: [],
  styles: [require('./web-article.scss')],
  template: require('./web-article.html')
})
export class WebArticleComponent implements OnInit {
  private articleUrl: string;
  private article: Article;

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.articleUrl = params.id;
      console.log(params.id);
    });
  }
}
