import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { HomeNavbarService } from "./home-navbar.service";

@Component({
  selector: 'web-navbar',
  providers: [HomeNavbarService],
  styles: [require('./home-navbar.scss')],
  template: require('./home-navbar.html'),
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WebNavbarComponent implements OnInit {

  menus;

  constructor(public navbarService: HomeNavbarService) {

  }

  ngOnInit() {
    this.menus = this.navbarService.getMenus();
  }

}
