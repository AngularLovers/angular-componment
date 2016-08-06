import { WebpackAsyncRoute } from "@angularclass/webpack-toolkit";
import { RouterConfig } from "@angular/router";

import {
  routes as xiaomoAppRoutes,
  asyncRoutes as xiaomoAppAsyncRoutes,
  prefetchRouteCallbacks as xiaomoAppPrefetchRouteCallbacks
} from "./web_app";

export const routes: RouterConfig = [
  { path: '', pathMatch: 'full', redirectTo: '/xiaomo/home' },
  ...xiaomoAppRoutes,
];

// Async load a component using Webpack's require with es6-promise-loader and webpack `require`
// the component correctly

export const asyncRoutes: AsyncRoutes = {
  // we have to use the alternative syntax for es6-promise-loader to grab the routes
  ...xiaomoAppAsyncRoutes
  // must be exported with detail/index.ts
};


// Optimizations for initial loads
// An array of callbacks to be invoked after bootstrap to prefetch async routes
export const prefetchRouteCallbacks: Array<IdleCallbacks> = [
  ...xiaomoAppPrefetchRouteCallbacks
  // es6-promise-loader returns a function
];


// Es6PromiseLoader and AsyncRoutes interfaces are defined in custom-typings
