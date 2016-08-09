/**
 * 把今天最好的表现当作明天最新的起点．．～
 * いま 最高の表現 として 明日最新の始発．．～
 * Today the best performance  as tomorrow newest starter!
 * Created by IntelliJ IDEA.
 *
 * @author: xiaomo
 * @github: https://github.com/qq83387856
 * @email: hupengbest@163.com
 * @QQ_NO: 83387856
 * @Date: 17:42 2016/7/19
 * @Description: 日志服务
 * @Copyright(©) 2016 by xiaomo.
 */


export class Logger {

  /**
   * debug
   * @param msg
   */
  public static debug(msg: any) {
    console.debug(msg);
  }

  /**
   * error
   * @param msg
   */
  public static error(msg: any) {
    console.error(msg);
  }

  /**
   * warn
   * @param msg
   */
  public static warn(msg: any) {
    console.warn(msg);
  }

  /**
   * info
   * @param msg
   */
  public static info(msg: any) {
    console.info(msg);
  }

  /**
   * alert
   * @param msg
   */
  public static alert(msg: any) {
    alert(msg);
  }
}
