import { RouterConfig, provideRouter } from "@angular/router";
import { LoginRoutes } from "./webHome/homeLogin/login.routes";
import { navbarRouters } from "./webHome/homeNavbar/navbar.routes";

export const routes: RouterConfig = [
    ...LoginRoutes, // 登录
    ...navbarRouters // 导航
  ]
  ;

export const APPLICATION_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
