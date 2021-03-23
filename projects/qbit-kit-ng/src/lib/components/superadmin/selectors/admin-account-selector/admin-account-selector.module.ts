import { NgModule } from '@angular/core';
import { SaCommonModule } from '../../../../sa-common.module';
import { SaAdminAccountSelectorComponent } from './admin-account-selector.component';

@NgModule({
  imports: [SaCommonModule],
  declarations: [SaAdminAccountSelectorComponent],
  exports: [SaAdminAccountSelectorComponent],
})
export class SaAdminAccountSelectorModule {}
