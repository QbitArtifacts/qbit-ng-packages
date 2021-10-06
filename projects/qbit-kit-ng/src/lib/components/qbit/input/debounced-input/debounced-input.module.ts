import { QDebouncedInput } from './debounced-input.component';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { QCommonModule } from '../../../../common.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  imports: [QCommonModule, MatButtonModule, MatIconModule, MatAutocompleteModule],
  declarations: [QDebouncedInput],
  exports: [QDebouncedInput, MatAutocompleteModule],
})
export class QDebouncedInputModule {}
