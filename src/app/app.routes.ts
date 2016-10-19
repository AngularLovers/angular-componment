import { Routes } from "@angular/router";
import { HomeComponent } from "./home";
import { AboutComponent } from "./about";
import { NoContentComponent } from "./no-content";
import { BoardComponent } from "./board/board";


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'board', component: BoardComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: NoContentComponent},
];
