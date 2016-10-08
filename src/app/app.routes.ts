import { Routes } from "@angular/router";
import { Home } from "./home";
import { About } from "./about";
import { NoContent } from "./no-content";


export const ROUTES: Routes = [
  {path: '', component: Home},
  {path: 'home', component: Home},
  {path: 'about', component: About},
  {path: 'detail', loadChildren: () => System.import('./+detail')},
  {path: '**', component: NoContent},
];
