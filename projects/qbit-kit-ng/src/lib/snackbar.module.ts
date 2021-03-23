import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule } from '@ngx-translate/core';
import { QSnackBar } from './services/snackbar.service';

@NgModule({
  providers: [QSnackBar],
  imports: [TranslateModule, MatSnackBarModule],
  exports: [],
})
export class QSnackBarModule {}
