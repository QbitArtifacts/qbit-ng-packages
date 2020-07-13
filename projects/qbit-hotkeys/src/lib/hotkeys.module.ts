import { TranslateModule } from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HotkeysService } from './hotkeys.service';
import { FormsModule } from '@angular/forms';
import { HotkeysDialogComponent } from './hotkeys-dialog/hotkeys-dialog.component';

@NgModule({
  declarations: [HotkeysDialogComponent],
  exports: [FormsModule, HotkeysDialogComponent],
  imports: [BrowserModule, FormsModule, TranslateModule],
  providers: [HotkeysService],
  entryComponents: [HotkeysDialogComponent],
})
export class HotkeysModule {}
