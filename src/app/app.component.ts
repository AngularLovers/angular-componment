/*
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation, ViewContainerRef } from "@angular/core";
import { WebNavbarComponent } from "./webHome/homeHavbar";
import { WebFooterComponent, WebHeaderComponent, BaBackTop } from "common";
import { AppState } from "./app.service";
import { BaThemePreloader, BaThemeSpinner, Logger } from "services";

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  directives: [WebHeaderComponent, WebNavbarComponent, WebFooterComponent,BaBackTop],
  providers: [BaThemeSpinner,Logger],
  styles:[require('./app.scss'),require('normalize.css')],
  template: require('./app.html')
})
export class App implements OnInit{

  /**
   * 构造函数
   * @param viewContainerRef
   * @param spinner
   * @param appState
   */
  constructor(
    viewContainerRef:ViewContainerRef,
    private spinner:BaThemeSpinner,
    public appState: AppState) {

  }

  /**
   * angular2初始化函数
   */
  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

  /**
   * 载入动画
   */
  public ngAfterViewInit():void {
    BaThemePreloader.load().then(() => {
      this.spinner.hide();
    });
  }

}
