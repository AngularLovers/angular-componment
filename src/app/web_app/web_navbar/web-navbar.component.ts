import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { DropdownDirective } from 'common';

@Component({
  selector: 'web-navbar',
  providers: [],
  directives: [DropdownDirective, RouterLinkActive],
  pipes: [],
  styles: [require('./web-navbar.scss')],
  template: require('./web-navbar.html'),
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WebNavbarComponent {
  private showNavBar: boolean;

  toggleNavBarState($event: Event) {
    $event.stopPropagation();
    this.showNavBar = !this.showNavBar;
  }

  hideNavBar($event: Event) {
    /* tslint:disable */
    $event && $event.stopPropagation();
    /* tslint:enable */
    this.showNavBar = false;
  }
}
