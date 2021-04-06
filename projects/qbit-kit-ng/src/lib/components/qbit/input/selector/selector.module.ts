import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { QCommonModule } from '../../../../common.module';
import { QSelectorComponent } from './selector.component';

@NgModule({
  imports: [QCommonModule, MatFormFieldModule, MatSelectModule],
  declarations: [QSelectorComponent],
  exports: [QSelectorComponent],
})
export class QSelectorModule {}
