import { Routes } from "@angular/router";
import { WebHomeComponent } from "../web-home.component";
import { WebTechnologyComponent } from "../../web2Technology/web-technology.component";
import { WebJapanComponent } from "../../web3Japan/web-japan.component";
import { WebLoveComponent } from "../../web4Love/web-love.component";
import { WebProjectComponent } from "../../web5Project/web-project.component";
import { WebAboutComponent } from "../../web6About/web-about.component";
import { WebTestComponent } from "../../web7Test/web-test.component";



export const navbarRouters: Routes = [
    {path: 'home', component: WebHomeComponent},
    {path: 'test', component: WebTestComponent},
    {path: 'technology', component: WebTechnologyComponent},
    {path: 'love', component: WebLoveComponent},
    {path: 'nihongo', component: WebJapanComponent},
    {path: 'project', component: WebProjectComponent},
    {path: 'about', component: WebAboutComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
  ];
