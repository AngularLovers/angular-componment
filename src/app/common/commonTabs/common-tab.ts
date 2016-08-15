import {Component, ChangeDetectionStrategy} from '@angular/core';
import {TAB_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

// webpack html imports
let template = require('./common-tab.html');

@Component({
  selector: 'common-tab',
  directives: [TAB_DIRECTIVES],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: template
})
export class CommonTabComponent {
  public tabs:Array<any> = [
    {title: 'Dynamic Title 1', content: 'Dynamic content 1'},
    {title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true},
    {title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true}
  ];

  public alertMe():void {
    setTimeout(function ():void {
      alert('You\'ve selected the alert tab!');
    });
  };

  public setActiveTab(index:number):void {
    this.tabs[index].active = true;
  };

  public removeTabHandler(/*tab:any*/):void {
    console.log('Remove Tab handler');
  };
}
