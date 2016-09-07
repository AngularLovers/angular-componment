/*
 * Custom Type Definitions
 * When including 3rd party modules you also need to include the type definition for the module
 * if they don't provide one within the module. You can try to install it with @types

 npm install @types/node
 npm install @types/lodash

 * If you can't find the type definition in the registry we can make an ambient/global definition in
 * this file for now. For example

 declare module "my-module" {
 export function doesSomething(value: string): string;
 }

 * If you are using a CommonJS module that is using module.exports then you will have to write your
 * types using export = yourObjectOrFunction with a namespace above it
 * notice how we have to create a namespace that is equal to the function we're assigning the export to

 declare module "jwt-decode" {
 function jwtDecode(token: string): any;
 namespace jwtDecode {}
 export = jwtDecode;
 }

 *
 * If you're prototying and you will fix the types later you can also declare it as type any
 *

 declare var assert: any;
 declare var _: any;
 declare var $: any;

 *
 * If you're importing a module that uses Node.js modules which are CommonJS you need to import as
 * in the files such as main.browser.ts or any file within app/
 *

 import * as _ from 'lodash'

 * You can include your type definitions in this file until you create one for the @types
 *
 */

// support NodeJS modules without type definitions
declare module "*"
;


/**
 * 变量
 */
declare var ENV: string;
declare var HMR: boolean;
declare var jQuery: any;
declare var System: SystemJS;

interface SystemJS {
  import: (path?: string) => Promise<any>;
}

/**
 * 全局环境
 */
interface GlobalEnvironment {
  ENV: string;
  HMR: boolean;
  SystemJS: SystemJS;
  System: SystemJS;
}

/**
 *  ES6加载器
 */
interface Es6PromiseLoader {
  (id: string): (exportName?: string) => Promise<any>;
}

/**
 * 工厂承诺载入器
 */
type FactoryEs6PromiseLoader = () => Es6PromiseLoader;

/**
 * 工厂承诺
 */
type FactoryPromise = () => Promise<any>;


/**
 * 异步路由
 */
type AsyncRoutes = {
  [component: string]: Es6PromiseLoader |
    Function |
    FactoryEs6PromiseLoader |
    FactoryPromise
};


/**
 * 回调
 */
type IdleCallbacks = Es6PromiseLoader |
  Function |
  FactoryEs6PromiseLoader |
  FactoryPromise ;


/**
 *  webpack模块
 */
interface WebpackModule {
  hot: {
    data?: any,
    idle: any,
    accept(dependencies?: string | string[], callback?: (updatedDependencies?: any) => void): void;
    decline(deps?: any | string | string[]): void;
    dispose(callback?: (data?: any) => void): void;
    addDisposeHandler(callback?: (data?: any) => void): void;
    removeDisposeHandler(callback?: (data?: any) => void): void;
    check(autoApply?: any, callback?: (err?: Error, outdatedModules?: any[]) => void): void;
    apply(options?: any, callback?: (err?: Error, outdatedModules?: any[]) => void): void;
    status(callback?: (status?: string) => void): void | string;
    removeStatusHandler(callback?: (status?: string) => void): void;
  };
}

/**
 *  webpack加载
 */
interface WebpackRequire {
  (id: string): any;
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure(ids: string[], callback: (req: WebpackRequire) => void, chunkName?: string): void;
  context(directory: string, useSubDirectories?: boolean, regExp?: RegExp): WebpackContext;
}

/**
 * webpack上下文
 */
interface WebpackContext extends WebpackRequire {
  keys(): string[];
}

/**
 * 错误追踪限制
 */
interface ErrorStackTraceLimit {
  stackTraceLimit: number;
}


/**
 * node 加载
 */
interface NodeRequire extends WebpackRequire {
}

/**
 * 错误构造函数
 */
interface ErrorConstructor extends ErrorStackTraceLimit {
}

/**
 * node载入方法
 */
interface NodeRequireFunction extends Es6PromiseLoader {
}

/**
 * node 模块
 */
interface NodeModule extends WebpackModule {
}

/**
 *  全局
 */
interface Global extends GlobalEnvironment {
}
