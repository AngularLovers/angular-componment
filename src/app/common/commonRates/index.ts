export * from './common-rate.component';


/**
 *
 *   评分所需要的参数  最大星星个数(建议5颗星或10颗星,会好看一点)，默认评分大小，是否只读
 *   max: number = 20;
 *   rate: number = 15;
 *  isReadOnly: boolean = false;
 *
 *  (submitRate)="xxx($event)"
 *    xxx(rate){
    todo  这里可以接收子组件传过来的值(用户选定的评分结果)，然后进行对应的操作。
  }
 *
 *
 *    使用的时候
 *    <common-rate [max]="max" [rate]="rate" [isReadonly]="isReadOnly" (submitRate)="alertRate($event)"></common-rate>
 *
 */
