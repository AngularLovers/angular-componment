export * from './common-radio.component';

/**
 *    按钮
 *
 *   msg 内容
 *   color 颜色   btn-success|btn-default|btn-danger|btn-info|btn-primary
 *   size 大小    btn-sm|btn-lg|btn-xxx
 *   isClickAble 是否可点击  默认可点击  true|false 默认false
 *   icon 图标  不传就没有图标
 *   isRadius 是否是圆角
 *
 *  父组件中定义些方法然后供子组件调用
 *  clickEvent(){
 *   // todo
 *  }
 *
 *   使用
 *   <common-button (clickEvent)="clickEvent()" [msg]="'测试'" [color]="'btn-danger'" [isRadius]="true"></common-button>
 *
 * */
