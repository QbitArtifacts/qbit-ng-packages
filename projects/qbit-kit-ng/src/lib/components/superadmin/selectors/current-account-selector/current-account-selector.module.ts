import { NgModule } from '@angular/core';
import { SaCurrentAccountSelectorComponent } from './current-account-selector.component';
import { SaCommonModule } from './../../../../common.module';

@NgModule({
  imports: [SaCommonModule],
  declarations: [SaCurrentAccountSelectorComponent],
  exports: [SaCurrentAccountSelectorComponent],
})
export class SaCurrentAccountSelectorModule {}
