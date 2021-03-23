import { NgModule } from '@angular/core';
import { SaCommonModule } from '../../../../sa-common.module';
import { SaApplicationSelectorComponent } from './application-selector.component';

@NgModule({
  imports: [SaCommonModule],
  declarations: [SaApplicationSelectorComponent],
  exports: [SaApplicationSelectorComponent],
})
export class SaApplicationSelectorModule {}
