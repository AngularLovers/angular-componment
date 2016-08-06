import { WebpackAsyncRoute } from "@angularclass/webpack-toolkit";
import { RouterConfig } from "@angular/router";

export const routes: RouterConfig = [
    {path: '**', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: 'WebHomeComponent'},
    {path: 'focus', component: 'WebFocusComponent'},
    {path: 'goodBlog', component: 'WebGoodBlogComponent'},
    {path: 'project', component: 'WebProjectComponent'},
    {path: 'about', component: 'WebAboutComponent'}
  ]
  ;

// Async load a component using Webpack's require with es6-promise-loader and webpack `require`
// asyncRoutes is needed for our @angularclass/webpack-toolkit that will allow us to resolve
// the component correctly

export const asyncRoutes: AsyncRoutes = {
  'WebHomeComponent': require('es6-promise-loader!./web_home'),
  'WebFocusComponent': require('es6-promise-loader!./web_focus'),
  'WebGoodBlogComponent': require('es6-promise-loader!./web_goodBlog'),
  'WebProjectComponent': require('es6-promise-loader!./web_project'),
  'WebAboutComponent': require('es6-promise-loader!./web_about')
};


// Optimizations for initial loads
// An array of callbacks to be invoked after bootstrap to prefetch async routes
export const prefetchRouteCallbacks: Array<IdleCallbacks> = [
  // es6-promise-loader returns a function
];


// Es6PromiseLoader and AsyncRoutes interfaces are defined in custom-typings
