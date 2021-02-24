import { QCommonModule } from './common.module';
import { NgModule } from '@angular/core';
import { QBreadcrumbsComponent } from './components/qbit/navigation/breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [QCommonModule, RouterModule],
  declarations: [QBreadcrumbsComponent],
  exports: [QBreadcrumbsComponent],
})
export class QBreadcrumbsModule {}
