import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { QCommonModule } from '../../../../common.module';
import { QDialogHeaderComponent } from './dialog-header.component';

@NgModule({
  imports: [QCommonModule, MatButtonModule, MatIconModule],
  declarations: [QDialogHeaderComponent],
  exports: [QDialogHeaderComponent],
})
export class QDialogHeaderModule {}
