import { Component,Input } from '@angular/core';
import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';
import { AlertModel } from "./common-alert.model";

let template = require('./common-alert.html');

@Component({
  selector: 'common-alert',
  template: template,
  directives: [AlertComponent]
})
export class CommonAlertComponent {
  @Input() alerts: Array<AlertModel>;

  /**
   * 关闭提示
   * @param i
   */
  public closeAlert(i: number): void {
    this.alerts.splice(i, 1);
  }

}
