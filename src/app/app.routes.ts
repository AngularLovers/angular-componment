import { RouterConfig } from '@angular/router';
import {
  routes as xiaomoAppRoutes,
  asyncRoutes as xiaomoAppAsyncRoutes,
  prefetchRouteCallbacks as xiaomoAppPrefetchRouteCallbacks
} from './web_app';


export const routes: RouterConfig = [
  { path: '', pathMatch: 'full', redirectTo: '/xiaomo/home' },
  ...xiaomoAppRoutes,
];

// Async load a component using Webpack's require with es6-promise-loader and webpack `require`
// asyncRoutes is needed for our @angularclass/webpack-toolkit that will allow us to resolve
// the component correctly
export const asyncRoutes: AsyncRoutes = Object.assign({}, xiaomoAppAsyncRoutes);


// Optimizations for initial loads
// An array of callbacks to be invoked after bootstrap to prefetch async routes
/* tslint:disable:no-string-literal */
export const prefetchRouteCallbacks: Array<Es6PromiseLoader | Function> = [
  ...xiaomoAppPrefetchRouteCallbacks,
];
/* tsslint:enable:no-string-literal */

// Es6PromiseLoader and AsyncRoutes interfaces are defined in custom-typings
