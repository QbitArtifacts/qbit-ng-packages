import { NgModule } from '@angular/core';
import { SaCommonModule } from '../../../../sa-common.module';
import { SaUserSelectorComponent } from './user-selector.component';

@NgModule({
  imports: [SaCommonModule],
  declarations: [SaUserSelectorComponent],
  exports: [SaUserSelectorComponent],
})
export class SaUserSelectorModule {}
