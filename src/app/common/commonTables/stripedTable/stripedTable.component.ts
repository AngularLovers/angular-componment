import {Component} from '@angular/core';

import {BaAppPicturePipe} from './../../../../pipes/index';
import { BasicTablesService } from '../../../../../pages/demo/tables/components/basicTables/basicTables.service';

@Component({
  selector: 'striped-table',
  template: require('./stripedTable.html'),
  pipes: [BaAppPicturePipe]
})
export class StripedTable {

  smartTableData:Array<any>;

  constructor(private _basicTablesService: BasicTablesService) {
    this.smartTableData = _basicTablesService.smartTableData;
  }
}
