import { SaPermissionsSelectorComponent } from './permissions-selector.component';
import { SaCommonModule } from '../../../../common.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [SaCommonModule],
  declarations: [SaPermissionsSelectorComponent],
  exports: [SaPermissionsSelectorComponent],
})
export class SaPermissionsSelectorModule {}
