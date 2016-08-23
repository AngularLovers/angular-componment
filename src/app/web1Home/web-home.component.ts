import { Component } from '@angular/core';

import { WebBannerComponent } from './homeBanner';
import { WebIntroduceComponent } from './homeIntroduce';
import { LoginComponent } from "./homeLogin";


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
