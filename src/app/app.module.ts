import { NgModule, ApplicationRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { ENV_PROVIDERS } from "./environment";
import { removeNgStyles, createNewHosts, createInputTransfer } from "@angularclass/hmr";
import { ROUTES } from "./app.routes";
import { App } from "./app.component";
import { APP_RESOLVER_PROVIDERS } from "./app.resolver";
import { AppState, InteralStateType } from "./app.service";
import { WebHeaderComponent, WebFooterComponent, BaBackTop } from "common";
import { WebHomeComponent } from "./web1Home/web-home.component";
import { WebTestComponent } from "./web7Test/web-test.component";
import { WebTechnologyComponent } from "./web2Technology/web-technology.component";
import { WebProjectComponent } from "./web5Project/web-project.component";
import { WebAboutComponent } from "./web6About/web-about.component";
import { WebJapanComponent } from "./web3Japan/web-japan.component";
import { WebNavbarComponent } from "./web1Home/homeNavbar/home-navbar.component";
import { WebIntroduceComponent } from "./web1Home/homeIntroduce/home-introduce";
import { WebBannerComponent } from "./web1Home/homeBanner/home-banner.component";
import { ProjectItemComponent } from "./web5Project/projectItem/projectItem.component";
import { GoodBlogItemComponent } from "./web2Technology/goodBlogItem/goodBlog-item.component";

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
  state: InteralStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

@NgModule({
  bootstrap: [App],
  declarations: [
    App,
    BaBackTop,
    WebHeaderComponent,
    WebFooterComponent,
    WebNavbarComponent,
    WebHomeComponent,
    WebTestComponent,
    WebJapanComponent,
    WebTechnologyComponent,
    WebProjectComponent,
    WebAboutComponent,
    WebBannerComponent,
    ProjectItemComponent,
    WebIntroduceComponent,
    GoodBlogItemComponent
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

