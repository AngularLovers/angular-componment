/*
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { AppState } from "./app.service";
import { PreLoaderService } from "services";
import './app.loader';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styles:[require('./app.scss'),require('normalize.css')],
  template: require('./app.html')
})
export class App implements OnInit{

  /**
   * 构造函数
   * @param appState
   */
  constructor(
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
      PreLoaderService.hide();
    });
  }

}
