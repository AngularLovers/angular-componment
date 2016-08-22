/*
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { WebNavbarComponent } from "./webHome/homeNavbar";
import { WebFooterComponent, WebHeaderComponent, BaBackTop } from "common";
import { AppState } from "./app.service";
import { PreLoaderService, Logger } from "services";

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  directives: [WebHeaderComponent, WebNavbarComponent, WebFooterComponent,BaBackTop],
  providers: [PreLoaderService,Logger],
  styles:[require('./app.scss'),require('normalize.css')],
  template: require('./app.html')
})
export class App implements OnInit{

  /**
   * 构造函数
   * @param loader
   * @param appState
   */
  constructor(
    private loader:PreLoaderService,
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
    PreLoaderService.load().then(() => {
      this.loader.hide();
    });
  }

}
