import { WebpackAsyncRoute } from "@angularclass/webpack-toolkit";
import { RouterConfig } from "@angular/router";
import { xiaomoAppRoutes, xiaomoAppAsyncRoutes, xiaomoAppPrefetchRouteCallbacks } from "./web_app/xiaomo-app.routes";

export const routes: RouterConfig = [
  {path: '', pathMatch: 'full', redirectTo: '/xiaomo/home'},
  ...xiaomoAppRoutes,
];

// Async load a component using Webpack's require with es6-promise-loader and webpack `require`
// the component correctly

export const asyncRoutes: AsyncRoutes = {
  // we have to use the alternative syntax for es6-promise-loader to grab the routes
  ...xiaomoAppAsyncRoutes
};


// Optimizations for initial loads
// An array of callbacks to be invoked after bootstrap to prefetch async routes
export const prefetchRouteCallbacks: Array<IdleCallbacks> = [
  ...xiaomoAppPrefetchRouteCallbacks
];


// Es6PromiseLoader and AsyncRoutes interfaces are defined in custom-typings
