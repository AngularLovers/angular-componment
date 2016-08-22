import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { PLATFORM_PROVIDERS } from "../platform/browser";
import { ENV_PROVIDERS } from "../platform/environment";
import { ROUTES } from "./app.routes";
import { App } from "./app.component";
import { APP_RESOLVER_PROVIDERS } from "./app.resolver";
import { AppState } from "./app.service";
import { WebHeaderComponent } from "./common/webHeader/web-header.component";
import { WebNavbarComponent } from "./webHome/homeNavbar/home-navbar.component";
import { WebFooterComponent } from "./common/webFooter/web-footer.component";
import { BaBackTop } from "./common/commonBackTop/baBackTop.component";

/*
 * Platform and Environment providers/directives/pipes
 */

// App is our top level component

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];


@NgModule({
  bootstrap: [App],
  declarations: [
    App, WebHeaderComponent, WebNavbarComponent, WebFooterComponent, BaBackTop
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    PLATFORM_PROVIDERS,
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {
}
