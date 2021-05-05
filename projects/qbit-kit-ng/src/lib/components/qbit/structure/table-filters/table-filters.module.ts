import { QTableFilters } from './table-filters.component';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { QBreadcrumbsModule } from '../../navigation/breadcrumbs/breadcrumbs.module';
import { QCommonModule } from '../../../../common.module';
import { QDebouncedInputModule } from '../../input/debounced-input/debounced-input.module';

@NgModule({
  imports: [QCommonModule, QBreadcrumbsModule, MatSelectModule, QDebouncedInputModule],
  declarations: [QTableFilters],
  exports: [QTableFilters],
})
export class QTableFiltersModule {}
