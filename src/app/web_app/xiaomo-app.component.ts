import { Component } from '@angular/core';
import { WebNavbarComponent } from './web_home/web_navbar';
import { WebFooterComponent, WebHeaderComponent } from 'common';

@Component({
  selector: 'xiaomo-app',
  pipes: [],
  providers: [],
  directives: [WebHeaderComponent, WebNavbarComponent, WebFooterComponent],
  styles: [
    require('./xiaomo-app.scss')
  ],
  template: require('./xiaomo-app.html')
})
export class XiaomoAppComponent {

}
