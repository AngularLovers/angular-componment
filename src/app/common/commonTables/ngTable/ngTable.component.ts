import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CORE_DIRECTIVES, NgClass } from '@angular/common';
import { NgTableSortingDirective } from './ngTable-sorting.directive';

@Component({
  selector: 'ng-table',
  template: require('./ngTable.html'),
  styles: [require('./ngTable.scss')],
  directives: [NgTableSortingDirective, NgClass, CORE_DIRECTIVES]
})

/**
 * 通用表格组件
 */
export class NgTableComponent {
  
  /**
   * 行
   * @type {Array}
   * @private
   */
  private _columns:Array<any> = [];
  
  // 父级组件传过来的数据
  @Input() public rows:Array<any> = []; //列
  @Input() public config:any = {}; // 配置
  
  @Input() //行
  public set columns(values:Array<any>) {
    values.forEach((value:any) => {
      let column = this._columns.find((col:any) => col.name === value.name);
      if(column) {
        Object.assign(column, value);
      }
      if(!column) {
        this._columns.push(value);
      }
    });
  }
  
  // 自定义事件
  @Output() public tableChanged:EventEmitter<any> = new EventEmitter();
  
  
  /**
   *获取行
   * @returns {Array<any>}
     */
  public get columns():Array<any> {
    return this._columns;
  }
  
  /**
   * 配置行
   * @returns {{columns: Array<any>}}
     */
  public get configColumns():any {
    let sortColumns:Array<any> = [];
    
    this.columns.forEach((column:any) => {
      if(column.sort) {
        sortColumns.push(column);
      }
    });
    
    return {columns: sortColumns};
  }
  
  /**
   * 表格数据变化
   * @param column
     */
  public onChangeTable(column:any):void {
    this._columns.forEach((col:any) => {
      if(col.name !== column.name && col.sort !== false) {
        col.sort = '';
      }
    });
    this.tableChanged.emit({sorting: this.configColumns});
  }
  
  /**
   * 获取表格数据
   * @param row  一整行数据，是一个对象
   * @param propertyName 表头的英文名 作为key
   * @returns {string|any}
     */
  public getData(row:any, propertyName:string):string {
    let names:Array<string> = propertyName.split('.'); //将一个字符串用.分割成数组
    return names.reduce((prev:any, curr:string) =>  prev[curr],row);
  }
}
