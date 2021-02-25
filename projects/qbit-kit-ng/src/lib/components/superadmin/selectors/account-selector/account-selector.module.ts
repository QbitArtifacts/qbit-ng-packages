import { NgModule } from '@angular/core';
import { QCommonModule } from '../../../../common.module';
import { SaAccountSelectorComponent } from './account-selector.component';

@NgModule({
  imports: [QCommonModule],
  declarations: [SaAccountSelectorComponent],
  exports: [SaAccountSelectorComponent],
})
export class SaAccountSelectorModule {}
