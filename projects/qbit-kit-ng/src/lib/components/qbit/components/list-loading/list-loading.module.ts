import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { QCommonModule } from '../../../../common.module';
import { QListLoadingComponent } from './list-loading.component';

@NgModule({
  imports: [QCommonModule, MatProgressSpinnerModule],
  declarations: [QListLoadingComponent],
  exports: [QListLoadingComponent],
})
export class QListLoadingModule {}
