import { NgModule } from '@angular/core';
import { SaPermissionsSelectorComponent } from './permissions-selector.component';
import { SaCommonModule } from '../../../../sa-common.module';

@NgModule({
  imports: [SaCommonModule],
  declarations: [SaPermissionsSelectorComponent],
  exports: [SaPermissionsSelectorComponent],
})
export class SaPermissionsSelectorModule {}
