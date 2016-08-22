import { Injectable } from "@angular/core";

@Injectable()
export class PreLoaderService {
  private selector: string = 'preloader';
  private element: HTMLElement;
  private static _loaders: Array<Promise<any>> = [];

  public static registerLoader(method: Promise<any>): void {
    PreLoaderService._loaders.push(method);
  }

  constructor() {
    this.element = document.getElementById(this.selector);
  }

  public show(): void {
    this.element.style['display'] = 'block';
  }

  public hide(delay: number = 0): void {
    setTimeout(() => {
      this.element.style['display'] = 'none';
    }, delay);
  }

  public static clear(): void {
    PreLoaderService._loaders = [];
  }

  public static load(): Promise<any> {
    return new Promise((resolve, reject) => {
      PreLoaderService._executeAll(resolve);
    });
  }

  private static _executeAll(done: Function): void {
    setTimeout(() => {
      Promise.all(PreLoaderService._loaders).then((values) => {
        done.call(null, values);

      }).catch((error) => {
        console.error(error);
      });
    });
  }
}
