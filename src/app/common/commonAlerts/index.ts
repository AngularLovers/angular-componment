export * from './common-alert.component';
/**
1.参数：
alerts: Array<AlertModel> = [];

constructor() {
  this.alerts = [
    {
      type: 'danger',
      msg: '这是一个提示危险的消息.',
      dismissTime: 30000,
      closable: true
    },
    {
      type: 'success',
      msg: '这是一个提示成功的消息.',
      dismissTime: 30000,
      closable: true
    }
  ]
}

 2、 使用
定好以上参数，传给该组件就可以了。
<common-alert [alerts]="alerts"></common-alert>


  3.后续可以考虑加上动画
 */
