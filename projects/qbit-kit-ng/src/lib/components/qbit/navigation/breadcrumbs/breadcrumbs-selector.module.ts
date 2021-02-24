import { SaCommonModule } from '../../../../common.module';
import { NgModule } from '@angular/core';
import { QBreadcrumbsComponent } from './breadcrumbs.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [SaCommonModule, RouterModule],
  declarations: [QBreadcrumbsComponent],
  exports: [QBreadcrumbsComponent],
})
export class QBreadcrumbsModule {}
