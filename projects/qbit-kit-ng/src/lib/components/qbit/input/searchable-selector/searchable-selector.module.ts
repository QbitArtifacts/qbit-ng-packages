import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { QCommonModule } from '../../../../common.module';
import { QSearchableSelectorComponent } from './searchable-selector.component';

@NgModule({
  imports: [QCommonModule, MatFormFieldModule, MatSelectModule, MatProgressSpinnerModule],
  declarations: [QSearchableSelectorComponent],
  exports: [QSearchableSelectorComponent],
})
export class QSearchableSelectorModule {}
