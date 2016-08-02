import { Component } from '@angular/core';

import { WebBannerComponent } from './web_banner';
import { WebIntroduceComponent } from './web_introduce';


@Component({
  selector: 'web-home',
  providers: [],
  directives: [WebBannerComponent,WebIntroduceComponent],
  pipes: [],
  styles: [require('./web-home.scss')],
  template: require('./web-home.html')
})
export class WebHomeComponent {

}
