import { Component,Input, OnInit } from '@angular/core';

import { LinkModel } from './link.model';

@Component({
  moduleId: module.id,
  selector: 'common-link',
  styles:[require('./commonLink.scss')],
  template:require('./commonLink.html')
})
export class CommonLinkComponent implements OnInit {

  @Input() link:LinkModel;

  linkName:string = '';
  linkUrl:string = '';
  className:string = '';
  icon:string = '';
  size:string = '';
  operate:string = '';

  constructor() {
  }

  ngOnInit() {
    if (this.link !== undefined ) {
      this.linkName = this.link.linkName;
      this.linkUrl = this.link.linkUrl;
      this.className = this.link.className;
      this.icon = this.link.icon;
      this.size = this.link.size;
      this.operate = this.link.operate;
    }
  }


}
