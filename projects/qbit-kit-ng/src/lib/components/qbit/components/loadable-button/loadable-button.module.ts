import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { QCommonModule } from '../../../../common.module';
import { QLoadableButtonComponent } from './loadable-button.component';

@NgModule({
  imports: [QCommonModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule],
  declarations: [QLoadableButtonComponent],
  exports: [QLoadableButtonComponent],
})
export class QLoadableButtonModule {}
