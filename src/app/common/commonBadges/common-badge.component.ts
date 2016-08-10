import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'common-badge',
  styles: [require('./common-badge.scss')],
  template: `<span class="badge {{badgeColor}} {{size}}">{{count}}</span>`
})
export class CommonBadgeComponent implements OnInit {

  @Input() count: number;
  @Input() badgeColor: string;
  @Input() size: string;

  constructor() {
    if (this.count <= 0) {
      this.count = 0;
    }
    if (!this.size) {
      this.size = "mid";
    }
  }

  ngOnInit() {
    console.log(this.badgeColor);
  }


}
