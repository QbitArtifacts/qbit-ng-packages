import { NgModule } from '@angular/core';
import { SaCurrentAccountSelectorComponent } from './current-account-selector.component';
import { QCommonModule } from './../../../../common.module';

@NgModule({
  imports: [QCommonModule],
  declarations: [SaCurrentAccountSelectorComponent],
  exports: [SaCurrentAccountSelectorComponent],
})
export class SaCurrentAccountSelectorModule {}
