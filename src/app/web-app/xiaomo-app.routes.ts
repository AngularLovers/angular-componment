import { RouterConfig } from '@angular/router';
import { XiaomoAppComponent } from './xiaomo-app.component';


export const routes: RouterConfig = [
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
// asyncRoutes is needed for our @angularclass/webpack-toolkit that will allow us to resolve
// the component correctly
export const asyncRoutes: AsyncRoutes = {
  'WebHomeComponent': require('es6-promise-loader!./web-home'),
  'WebFocusComponent': require('es6-promise-loader!./web-focus'),
  'WebGoodBlogComponent': require('es6-promise-loader!./web-good-blog'),
  'WebProjectComponent': require('es6-promise-loader!./web-project'),
  'WebAboutComponent': require('es6-promise-loader!./web-about')
};


// Optimizations for initial loads
// An array of callbacks to be invoked after bootstrap to prefetch async routes
/* tslint:disable:no-string-literal */
export const prefetchRouteCallbacks: Array<Es6PromiseLoader | Function> = [];
/* tsslint:enable:no-string-literal */

// Es6PromiseLoader and AsyncRoutes interfaces are defined in custom-typings
