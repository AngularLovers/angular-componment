/*
 * Angular 2 decorators and services
 */
import { Component,OnInit, ViewEncapsulation } from '@angular/core';

import { WebNavbarComponent } from './web_home/web_navbar';
import { WebFooterComponent, WebHeaderComponent } from 'common';
import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  directives: [WebHeaderComponent, WebNavbarComponent, WebFooterComponent],
  styles:[require('./app.style.scss')],
  template: require('./app.html')
})
export class App implements OnInit{

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
