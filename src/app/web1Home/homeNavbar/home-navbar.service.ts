import { Injectable } from '@angular/core';

const menus = require('./home-navbar.json');

@Injectable()
export class HomeNavbarService {

  getMenus(){
    return menus;
  }

}
