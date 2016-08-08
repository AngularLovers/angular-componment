/*
 * Angular 2 decorators and services
 */
import './app.loader.ts';

import { Component,OnInit, ViewEncapsulation } from '@angular/core';

import { WebNavbarComponent } from './webHome/homeHavbar';
import { WebFooterComponent, WebHeaderComponent } from 'common';
import { AppState } from './app.service';
import { BaThemePreloader,BaThemeSpinner,Logger} from "../services";

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  directives: [WebHeaderComponent, WebNavbarComponent, WebFooterComponent],
  providers: [BaThemeSpinner,Logger],
  styles:[require('./app.style.scss'),require('normalize.css')],
  template: require('./app.html')
})
export class App implements OnInit{

  constructor(
    private spinner:BaThemeSpinner,
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

  public ngAfterViewInit():void {
    BaThemePreloader.load().then((values) => {
      this.spinner.hide();
    });
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
