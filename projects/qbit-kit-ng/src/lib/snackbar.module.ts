import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { QSnackBar } from './services/snackbar.service';

@NgModule({
  providers: [QSnackBar],
  imports: [TranslateModule],
  exports: [],
})
export class QSnackBarModule {}
