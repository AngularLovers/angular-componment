import { Injectable } from "@angular/core";

@Injectable()
export class PreLoaderService {

  private selector: string = 'preloader'; //选择器
  public element: HTMLElement; //接收类型
  private static loaders: Array<Promise<any>> = [];  //loader数组


  /**
   * 构造函数
   */
  constructor() {
    this.element = document.getElementById(this.selector);
  }

  /**
   * 显示
   */
  public show(): void {
    this.element.style['display'] = 'block';
  }

  /**
   * 隐藏
   * @param delay
   */
  public static hide(delay: number = 0): void {
    setTimeout(() => {
      this.element.style['display'] = 'none';
    }, delay);
  }

  /**
   * 清除loader
   */
  public static clear(): void {
    PreLoaderService.loaders = [];
  }

  /**
   * load
   * @returns {Promise<any>}
   */
  public static load(): Promise<any> {
    return new Promise((resolve, reject) => {
      PreLoaderService.executeAll(resolve);
    });
  }

  /**
   * 注册loader
   * @param method
   */
  public static registerLoader(method: Promise<any>): void {
    PreLoaderService.loaders.push(method);
  }

  /**
   * 执行所有
   * @param done
   */
  private static executeAll(done: Function): void {
    setTimeout(() => {
      Promise.all(PreLoaderService.loaders).then((values) => {
        done.call(null, values);

      }).catch((error) => {
        console.error(error);
      });
    });
  }
}
