import { RouterConfig, provideRouter } from "@angular/router";

import { WebHomeComponent } from "./webHome/web-home.component";
import { WebFocusComponent } from "./webFocus/web-focus.component";
import { WebGoodBlogComponent } from "./webGoodBlog/web-goodBlog.component";
import { WebProjectComponent } from "./webproject/web-project.component";
import { WebAboutComponent } from "./webAbout/web-about.component";
import { LoginRoutes } from "./webHome/homeLogin/login.routes";

export const routes: RouterConfig = [
    ...LoginRoutes,
    {path: 'home', component: WebHomeComponent},
    {path: 'focus', component: WebFocusComponent},
    {path: 'goodBlog', component: WebGoodBlogComponent},
    {path: 'project', component: WebProjectComponent},
    {path: 'about', component: WebAboutComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
  ]
  ;

export const APPLICATION_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
