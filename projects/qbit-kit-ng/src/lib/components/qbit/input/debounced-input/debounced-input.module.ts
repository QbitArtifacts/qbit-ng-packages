import { QDebouncedInput } from './debounced-input.component';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { QCommonModule } from '../../../../common.module';

@NgModule({
  imports: [QCommonModule, MatButtonModule, MatIconModule],
  declarations: [QDebouncedInput],
  exports: [QDebouncedInput],
})
export class QDebouncedInputModule {}
