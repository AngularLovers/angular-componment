import { RouterConfig } from '@angular/router';
import { ManageAppComponent } from './manage-app.component';
import { LoginComponent } from './login';
import { AuthRolePermission } from 'rebirth-permission';

export const routes: RouterConfig = [
  { path: 'manage/login', component: LoginComponent },
  {
    path: 'manage', component: ManageAppComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/manage/login' },
      {
        path: 'home',
        component: 'ManageHomeComponent',
        data: { roles: ['Admin', 'User'] },
        canActivate: [AuthRolePermission]
      },
      {
        path: 'articles',
        component: 'ArticleListComponent',
        data: { roles: ['Admin', 'User'] },
        canActivate: [AuthRolePermission]
      },
      {
        path: 'articles/:id',
        component: 'MdEditorComponent',
        data: { roles: ['Admin', 'User'] },
        canActivate: [AuthRolePermission]
      }
    ]
  },
];

// Async load a component using Webpack's require with es6-promise-loader and webpack `require`
// asyncRoutes is needed for our @angularclass/webpack-toolkit that will allow us to resolve
// the component correctly
export const asyncRoutes: AsyncRoutes = {
  'ManageHomeComponent': require('es6-promise-loader!./manage-home'),
  'ArticleListComponent': require('es6-promise-loader!./article-list'),
  'MdEditorComponent': require('es6-promise-loader!./md-editor'),
};


// Optimizations for initial loads
// An array of callbacks to be invoked after bootstrap to prefetch async routes
/* tslint:disable:no-string-literal */
export const prefetchRouteCallbacks: Array<Es6PromiseLoader | Function> = [];
/* tsslint:enable:no-string-literal */

// Es6PromiseLoader and AsyncRoutes interfaces are defined in custom-typings
