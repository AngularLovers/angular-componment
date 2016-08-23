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
import { WebHeaderComponent,WebFooterComponent ,BaBackTop} from "common";
import { WebHomeComponent } from "./web1Home/web-home.component";
import { WebTestComponent } from "./web7Test/web-test.component";
import { WebTechnologyComponent } from "./web2Technology/web-technology.component";
import { WebProjectComponent } from "./web5Project/web-project.component";
import { WebAboutComponent } from "./web6About/web-about.component";
import { WebJapanComponent } from "./web3Japan/web-japan.component";
import { WebNavbarComponent } from "./web1Home/homeNavbar/home-navbar.component";
import { WebLoveComponent } from "./web4Love/web-love.component";

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
    App,
    WebHeaderComponent,
    WebFooterComponent,
    WebNavbarComponent,
    BaBackTop,
    WebHomeComponent,
    WebTestComponent,
    WebJapanComponent,
    WebTechnologyComponent,
    WebProjectComponent,
    WebAboutComponent,
    WebLoveComponent
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
