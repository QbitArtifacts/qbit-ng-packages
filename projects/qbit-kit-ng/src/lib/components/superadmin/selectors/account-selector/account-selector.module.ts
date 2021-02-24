import { NgModule } from '@angular/core';
import { SaCommonModule } from './../../../../common.module';
import { SaAccountSelectorComponent } from './account-selector.component';

@NgModule({
  imports: [SaCommonModule],
  declarations: [SaAccountSelectorComponent],
  exports: [SaAccountSelectorComponent],
})
export class SaAccountSelectorModule {}
