import { Routes } from "@angular/router";
import { Home } from "./home";
import { About } from "./about";
import { NoContent } from "./no-content";
import { Board } from "./board/board";


export const ROUTES: Routes = [
  {path: '', component: Home},
  {path: 'home', component: Home},
  {path: 'board', component: Board},
  {path: 'about', component: About},
  {path: '**', component: NoContent},
];
