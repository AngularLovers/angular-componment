import { NgModule, ApplicationRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { removeNgStyles, createNewHosts, createInputTransfer } from "@angularclass/hmr";
import { ENV_PROVIDERS } from "./environment";
import { ROUTES } from "./app.routes";
import { AppComponent } from "./app.component";
import { APP_RESOLVER_PROVIDERS } from "./app.resolver";
import { AppState, InternalStateType } from "./app.service";
import { HomeComponent } from "./home";
import { AboutComponent } from "./about";
import { NoContentComponent } from "./no-content";
import { XLargeDirective } from "./home/x-large";
import { HeaderComponent,FooterComponent } from "./common/index";
import { BannerComponent } from "./home/banner/banner";
import { WorkComponent } from "./home/work/work";
import { WorksComponent } from "./home/works/works";
import { SkillsComponent } from "./home/skills/skills";
import { BoardComponent } from "./board/board";
import { DuoShuoCommentComponent } from "./common/duoshuo-comment/duoshuo-comment.component";

/*
 * Platform and Environment providers/directives/pipes
 */
// App is our top level component

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    //公共部分
    HeaderComponent,
    FooterComponent,
    //首页
    BannerComponent,
    WorkComponent,
    WorksComponent,
    SkillsComponent,
    //关于我

    //留言板
    DuoShuoCommentComponent,
    // 导航组件
    AppComponent,
    AboutComponent,
    HomeComponent,
    BoardComponent,
    NoContentComponent,
    // 指令
    XLargeDirective
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) {
  }

  hmrOnInit(store: StoreType) {
    if (!store || !store.state) return;
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}

