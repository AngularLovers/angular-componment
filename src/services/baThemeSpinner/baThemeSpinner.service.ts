import {Injectable} from '@angular/core';

@Injectable()
export class BaThemeSpinner {

  private selector:string = 'preloader';
  private element:HTMLElement;

  constructor() {
    this.element = document.getElementById(this.selector);
  }

  public show():void {
    this.element.style['display'] = 'block';
  }

  public hide(delay:number = 2000):void {
    setTimeout(() => {
      this.element.style['display'] = 'none';
    }, delay);
  }
}
