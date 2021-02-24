import { SaCommonModule } from '../../../../common.module';
import { NgModule } from '@angular/core';
import { QBreadcrumbsComponent } from './breadcrumbs.component';

@NgModule({
  imports: [SaCommonModule],
  declarations: [QBreadcrumbsComponent],
  exports: [QBreadcrumbsComponent],
})
export class QBreadcrumbsModule {}
