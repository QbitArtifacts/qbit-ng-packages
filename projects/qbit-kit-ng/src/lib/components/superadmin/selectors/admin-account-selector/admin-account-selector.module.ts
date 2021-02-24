import { QCommonModule } from './../../../../common.module';
import { NgModule } from '@angular/core';
import { SaAdminAccountSelectorComponent } from './admin-account-selector.component';

@NgModule({
  imports: [QCommonModule],
  declarations: [SaAdminAccountSelectorComponent],
  exports: [SaAdminAccountSelectorComponent],
})
export class SaAdminAccountSelectorModule {}
