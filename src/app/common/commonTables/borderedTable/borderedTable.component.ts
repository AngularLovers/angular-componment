import { Component } from '@angular/core';

import { BaAppPicturePipe } from './../../../../pipes/index';
import { BasicTablesService } from '../../../../../pages/demo/tables/components/basicTables/basicTables.service';

@Component({
  selector: 'bordered-table',
  template: require('./borderedTable.html'),
  pipes: [BaAppPicturePipe]
})
export class BorderedTable {

  metricsTableData:Array<any>;

  constructor(private _basicTablesService: BasicTablesService) {
    this.metricsTableData = _basicTablesService.metricsTableData;
  }
}
