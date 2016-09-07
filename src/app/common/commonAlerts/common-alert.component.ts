import { Component, Input, OnInit } from "@angular/core";
let template = require('./common-alert.html');

@Component({
  selector: 'common-alert',
  template: template,
})
export class CommonAlertComponent implements OnInit {
  @Input() dismissTime: number;
  @Input() type: string;
  @Input() msg: string;
  alerts: Array<Object>;

  ngOnInit() {
    this.alerts = [
      {
        "msg": this.msg,
        "type": this.type,
        "dismissTime": this.dismissTime
      }
    ];
  }

  /**
   * 关闭提示
   * @param i
   */
  public closeAlert(i: number): void {
    this.alerts.splice(i, 1);
  }

}
