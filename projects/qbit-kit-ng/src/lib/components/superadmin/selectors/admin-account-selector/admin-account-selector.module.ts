import { SaCommonModule } from './../../../../common.module';
import { NgModule } from '@angular/core';
import { SaAdminAccountSelectorComponent } from './admin-account-selector.component';

@NgModule({
  imports: [SaCommonModule],
  declarations: [SaAdminAccountSelectorComponent],
  exports: [SaAdminAccountSelectorComponent],
})
export class SaAdminAccountSelectorModule {}
