import { RouterConfig } from "@angular/router";

import { WebAboutComponent } from "./../../webAbout/web-about.component";
import { WebHomeComponent } from "../web-home.component";
import { WebFocusComponent } from "../../webFocus/web-focus.component";
import { WebGoodBlogComponent } from "../../webGoodBlog/web-goodBlog.component";
import { WebProjectComponent } from "../../webProject/web-project.component";
import { WebTestComponent } from "../../webTest/web-test.component";

export const navbarRouters: RouterConfig = [
    {path: 'home', component: WebHomeComponent},
    {path: 'test', component: WebTestComponent},
    {path: 'focus', component: WebFocusComponent},
    {path: 'goodBlog', component: WebGoodBlogComponent},
    {path: 'project', component: WebProjectComponent},
    {path: 'about', component: WebAboutComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
  ];
