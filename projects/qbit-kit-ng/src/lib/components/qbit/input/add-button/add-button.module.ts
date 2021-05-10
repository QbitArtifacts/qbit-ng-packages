import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { QCommonModule } from '../../../../common.module';
import { QAddButtonComponent } from './add-button.component';

@NgModule({
  imports: [QCommonModule, MatButtonModule, MatIconModule],
  declarations: [QAddButtonComponent],
  exports: [QAddButtonComponent],
})
export class QAddButtonModule {}
