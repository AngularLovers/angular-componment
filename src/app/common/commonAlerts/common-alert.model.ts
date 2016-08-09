export class AlertModel {
  type: string; // 控制颜色
  dismissTime: number; //多少秒后关闭
  closable: boolean; //是否可关闭
  msg: string; //显示的信息

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
