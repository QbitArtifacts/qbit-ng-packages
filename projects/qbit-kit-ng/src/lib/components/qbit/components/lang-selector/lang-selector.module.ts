import { QLangSelectorService } from './lang-selector.service';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { QCommonModule } from '../../../../common.module';
import { QLangSelectorComponent } from './lang-selector.component';

@NgModule({
  imports: [QCommonModule, MatMenuModule],
  declarations: [QLangSelectorComponent],
  exports: [QLangSelectorComponent],
  providers: [QLangSelectorService]
})
export class QLangSelectorModule {}
