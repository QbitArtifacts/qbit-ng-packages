import { QTableFiltersAddable } from './table-filters-addable.component';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { QBreadcrumbsModule } from '../../navigation/breadcrumbs/breadcrumbs.module';
import { QCommonModule } from '../../../../common.module';
import { QDebouncedInputModule } from '../../input/debounced-input/debounced-input.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  imports: [QCommonModule, QBreadcrumbsModule, MatSelectModule, QDebouncedInputModule, MatAutocompleteModule],
  declarations: [QTableFiltersAddable],
  exports: [QTableFiltersAddable, MatAutocompleteModule],
})
export class QTableFiltersAddableModule {}
