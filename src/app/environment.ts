
// Angular 2
// rc2 workaround
import { enableDebugTools, disableDebugTools } from '@angular/platform-browser';
import { enableProdMode, ApplicationRef } from '@angular/core';
// Environment Providers
let PROVIDERS = [
  // common env directives
];

// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLSJS.md
let decorateModuleRef = function identity(value) { return value; };

if ('production' === ENV) {
  // Production
  disableDebugTools();
  enableProdMode();

  PROVIDERS = [
    ...PROVIDERS,
    // custom providers in production
  ];

} else {

  decorateModuleRef = (modRef: any) => {
    var appRef = modRef.injector.get(ApplicationRef);
    var cmpRef = appRef.components[0];

    let ng = (<any>window).ng;
    enableDebugTools(cmpRef);
    (<any>window).ng.probe = ng.probe;
    (<any>window).ng.coreTokens = ng.coreTokens;
    return modRef
  };

  // Development
  PROVIDERS = [
    ...PROVIDERS,
    // custom providers in development
  ];

}

export const decorateModuleRef = decorateModuleRef;

export const ENVPROVIDERS = [
  ...PROVIDERS
];
