import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class QSnackBar {
  public static DEFAULT_OPTS = {
    duration: 6e3,
  };
  constructor(private snackbar: MatSnackBar, private translate: TranslateService) {}

  public open(message: string, action: string = 'OK', options?: MatSnackBarConfig): MatSnackBarRef<SimpleSnackBar> {
    options = { ...options, ...QSnackBar.DEFAULT_OPTS };
    return this.snackbar.open(this.translate.instant(message), this.translate.instant(action), options);
  }
}
