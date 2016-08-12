export * from './common-alert.component';
/**
1.参数：
  dismissTime 自动消失的时间/毫秒
  type 提示类型  danger|info|warning|success
  msg  提示内容  随便什么文字都可以

 2、 使用
定好以上参数，传给该组件就可以了。
 <common-alert [dismissTime]="10000" [type]="'danger'"   [msg]="'这是一个提示危险的消息'"></common-alert>
  3.后续可以考虑加上动画
 */
