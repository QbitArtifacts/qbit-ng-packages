import { CustomSelectorComponent } from './application-selector.component';
import { NgModule } from '@angular/core';
import { SaCommonModule } from 'projects/qbit-kit-ng/src/public-api';

@NgModule({
  imports: [SaCommonModule],
  declarations: [CustomSelectorComponent],
  exports: [CustomSelectorComponent],
})
export class CustomSelectorModule {}
