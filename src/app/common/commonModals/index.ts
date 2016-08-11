export * from './modal.component';


/**
 *  btnName 按钮名字
 *  color 颜色  success|info|primary|warning|default|danger
 *  size 大小 lg|sm
 *  title 标题
 *  ng-content 可以放一个组件
 *
 *  使用
 *
 *  <common-modal [btnName]="'查看'" [size]="'lg'" [color]="'default'" [title]="'测试组件'">
 *      <anotherComponent></anotherComponent>
 *  </common-modal>
 *
 *  再套的这个组件就是弹出框的内容，一般是一篇文章或者是一个form表单
 * */
