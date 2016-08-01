import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'article-item',
  providers: [],
  directives: [],
  pipes: [],
  styles: [require('./article-item.scss')],
  template: require('./article-item.html'),
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleItemComponent {
  private static TAG_CLOUD_STYLE: string[] = ['primary', 'success', 'info', 'warning', 'danger'];
  @Input() articleItem: any;

  getTagStyle(tagIndex) {
    let index = Math.floor(((tagIndex + 1) * Math.random() * 100)) % ArticleItemComponent.TAG_CLOUD_STYLE.length;
    return ArticleItemComponent.TAG_CLOUD_STYLE[index];
  }
}
