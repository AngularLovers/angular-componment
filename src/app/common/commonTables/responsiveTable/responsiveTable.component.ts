import { Component } from '@angular/core';

import { BaAppPicturePipe } from './../../../../pipes/index';
import { BasicTablesService } from '../../../../../pages/demo/tables/components/basicTables/basicTables.service';

@Component({
  selector: 'responsive-table',
  template: require('./responsiveTable.html'),
  pipes: [BaAppPicturePipe]
})
export class ResponsiveTable {

  peopleTableData:Array<any>;

  constructor(private basicTablesService: BasicTablesService) {
    this.peopleTableData = basicTablesService.peopleTableData;
  }
}
