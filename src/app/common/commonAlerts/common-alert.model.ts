export class AlertModel {
  /**
   *  类型(控制颜色)  success|info|danger 三种
   */
  type: string;

  /**
   *  消失时间（多少秒后关闭）
   */
  dismissTime: number;

  /**
   *  是否可关闭
   */
  closable: boolean;

  /**
   * 显示的信息
   */
  msg: string;

  constructor(type: string, msg: string, dismissTime: number, closable?: boolean) {
    this.type = type;
    this.msg = msg;
    this.dismissTime = dismissTime;
    this.closable = closable || true;
  }
}

/**
 * todo 这里有个问题，我定义的模型虽然采用了可选参数，但是传递参数的时候不传closable还是会报错。
 */
