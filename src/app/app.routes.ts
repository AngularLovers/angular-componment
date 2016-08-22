import { Routes } from '@angular/router';
import { navbarRouters } from "./webHome/homeNavbar/navbar.routes";

export const ROUTES: Routes = [
    // ...LoginRoutes, // 登录
    ...navbarRouters // 导航
  ]
  ;
