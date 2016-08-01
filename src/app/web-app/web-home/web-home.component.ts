import { Component } from '@angular/core';
import { ArticleListComponent } from '../article-list';

@Component({
  selector: 'web-home',
  providers: [],
  directives: [ArticleListComponent],
  pipes: [],
  styles: [require('./web-home.scss')],
  template: require('./web-home.html')
})
export class WebHomeComponent {

}
