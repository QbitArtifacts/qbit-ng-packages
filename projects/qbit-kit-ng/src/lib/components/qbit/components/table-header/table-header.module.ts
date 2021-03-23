import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { QBreadcrumbsModule } from '../../../../breadcrumbs.module';
import { QCommonModule } from '../../../../common.module';
import { QTableHeaderComponent } from './table-header.component';

@NgModule({
  imports: [QCommonModule, QBreadcrumbsModule, MatSelectModule],
  declarations: [QTableHeaderComponent],
  exports: [QTableHeaderComponent],
})
export class QTableHeaderModule {}
