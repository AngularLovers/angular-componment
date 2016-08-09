import { NgTableComponent } from './ngTable.component';

import { NgTableFilteringDirective } from './ngTable-filtering.directive';
import { NgTablePagingDirective } from './ngTable-paging.directive';
import { NgTableSortingDirective } from './ngTable-sorting.directive';

export * from './ngTable.component';

export * from './ngTable-filtering.directive';
export * from './ngTable-paging.directive';
export * from './ngTable-sorting.directive';

export * from './ngTable-directives';

export default {
  directives: [
    NgTableComponent,
    NgTableFilteringDirective,
    NgTableSortingDirective,
    NgTablePagingDirective
  ]
};
