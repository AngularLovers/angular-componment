import { RouterConfig } from '@angular/router';
import { XiaomoAppComponent } from './xiaomo-app.component';


export const xiaomoAppRoutes: RouterConfig = [
  {
    path: 'xiaomo', component: XiaomoAppComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/xiaomo/home' },
      { path: 'home', component: 'WebHomeComponent' },
      { path: 'focus', component: 'WebFocusComponent' },
      { path: 'goodBlog', component: 'WebGoodBlogComponent' },
      { path: 'project', component: 'WebProjectComponent' },
      { path: 'about', component: 'WebAboutComponent' }
    ]
  }
];

// Async load a component using Webpack's require with es6-promise-loader and webpack `require`
// the component correctly
export const xiaomoAppAsyncRoutes: AsyncRoutes = {
  'WebHomeComponent': require('es6-promise-loader!./web_home'),
  'WebFocusComponent': require('es6-promise-loader!./web_focus'),
  'WebGoodBlogComponent': require('es6-promise-loader!./web_goodBlog'),
  'WebProjectComponent': require('es6-promise-loader!./web_project'),
  'WebAboutComponent': require('es6-promise-loader!./web_about')
};


// Optimizations for initial loads
// An array of callbacks to be invoked after bootstrap to prefetch async routes
/* tslint:disable:no-string-literal */
export const xiaomoAppPrefetchRouteCallbacks: Array<Es6PromiseLoader | Function> = [];
/* tsslint:enable:no-string-literal */

// Es6PromiseLoader and AsyncRoutes interfaces are defined in custom-typings
