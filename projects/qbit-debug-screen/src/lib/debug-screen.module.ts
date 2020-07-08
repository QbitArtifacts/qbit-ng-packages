import { NgModule } from '@angular/core';
import { DebugScreenComponent } from './debug-screen.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [DebugScreenComponent],
  imports: [BrowserModule],
  exports: [DebugScreenComponent],
  entryComponents: [DebugScreenComponent],
})
export class DebugScreenModule {}
