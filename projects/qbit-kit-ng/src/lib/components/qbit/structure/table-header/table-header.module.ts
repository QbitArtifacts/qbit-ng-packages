import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { QBreadcrumbsModule } from '../../navigation/breadcrumbs/breadcrumbs.module';
import { QCommonModule } from '../../../../common.module';
import { QTableHeaderComponent } from './table-header.component';

@NgModule({
  imports: [QCommonModule, QBreadcrumbsModule, MatSelectModule, MatProgressSpinnerModule],
  declarations: [QTableHeaderComponent],
  exports: [QTableHeaderComponent],
})
export class QTableHeaderModule {}
