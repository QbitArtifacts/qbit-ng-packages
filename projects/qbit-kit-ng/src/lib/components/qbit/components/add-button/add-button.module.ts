import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { QCommonModule } from '../../../../common.module';
import { QAddButtonComponent } from './add-button.component';

@NgModule({
  imports: [QCommonModule, MatButtonModule],
  declarations: [QAddButtonComponent],
  exports: [QAddButtonComponent],
})
export class QAddButtonModule {}
