import {Component} from '@angular/core';

import {BaAppPicturePipe} from './../../../../pipes/index';
import { BasicTablesService } from '../../../../../pages/demo/tables/components/basicTables/basicTables.service';

@Component({
  selector: 'condensed-table',
  template: require('./condensedTable.html'),
  pipes: [BaAppPicturePipe]
})
export class CondensedTable {

  peopleTableData:Array<any>;

  constructor(private basicTablesService: BasicTablesService) {
    this.peopleTableData = basicTablesService.peopleTableData;
  }
}
