import { NgModule } from '@angular/core';
import { QApiSelectorComponent } from './base/api-selector';
import { QTableBase } from './base/table.page';

@NgModule({
  declarations: [QTableBase as any, QApiSelectorComponent as any],
  exports: [QTableBase as any, QApiSelectorComponent as any],
})
export class QbitKitBaseModule {}
