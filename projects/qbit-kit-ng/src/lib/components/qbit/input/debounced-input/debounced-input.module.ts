import { QDebouncedInput } from './debounced-input.component';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { QCommonModule } from '../../../../common.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [QCommonModule, MatButtonModule, MatIconModule, MatAutocompleteModule, MatInputModule, MatFormFieldModule],
  declarations: [QDebouncedInput],
  exports: [QDebouncedInput, MatAutocompleteModule],
})
export class QDebouncedInputModule {}
