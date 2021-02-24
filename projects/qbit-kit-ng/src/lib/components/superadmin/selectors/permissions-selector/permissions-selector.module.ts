import { SaPermissionsSelectorComponent } from './permissions-selector.component';
import { QCommonModule } from '../../../../common.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [QCommonModule],
  declarations: [SaPermissionsSelectorComponent],
  exports: [SaPermissionsSelectorComponent],
})
export class SaPermissionsSelectorModule {}
