import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { QBIT_LOCALES, QLocalesService } from '../../../../services/locales.service';
import { QCommonModule } from '../../../../common.module';
import { QLangSelectorComponent } from './lang-selector.component';

@NgModule({
  imports: [QCommonModule, MatMenuModule],
  declarations: [QLangSelectorComponent],
  exports: [QLangSelectorComponent],
  providers: [QLocalesService, { provide: QBIT_LOCALES, useValue: [] }],
})
export class QLangSelectorModule {}
