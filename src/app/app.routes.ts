import { RouterConfig, provideRouter } from "@angular/router";

import { WebHomeComponent } from "./web_home/web-home.component";
import { WebFocusComponent } from "./web_focus/web-focus.component";
import { WebGoodBlogComponent } from "./web_goodBlog/web-goodBlog.component";
import { WebProjectComponent } from "./web_project/web-project.component";
import { WebAboutComponent } from "./web_about/web-about.component";

export const routes: RouterConfig = [
    {path: '**', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: WebHomeComponent},
    {path: 'focus', component: WebFocusComponent},
    {path: 'goodBlog', component: WebGoodBlogComponent},
    {path: 'project', component: WebProjectComponent},
    {path: 'about', component: WebAboutComponent}
  ]
  ;

export const APPLICATION_ROUTER_DIRECTIVES = [
  provideRouter(routes)
];
