import { Routes } from '@angular/router';
import { navbarRouters } from "./web1Home/homeNavbar/navbar.routes";

export const ROUTES: Routes = [
    // ...LoginRoutes, // 登录
    ...navbarRouters // 导航
  ]
  ;
