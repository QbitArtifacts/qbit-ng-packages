import { QTableFiltersAddable } from './table-filters-addable.component';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { QBreadcrumbsModule } from '../../navigation/breadcrumbs/breadcrumbs.module';
import { QCommonModule } from '../../../../common.module';
import { QDebouncedInputModule } from '../../input/debounced-input/debounced-input.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    QCommonModule, 
    QBreadcrumbsModule, 
    MatSelectModule, 
    QDebouncedInputModule, 
    MatAutocompleteModule, 
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [QTableFiltersAddable],
  exports: [QTableFiltersAddable, MatAutocompleteModule],
})
export class QTableFiltersAddableModule {}
