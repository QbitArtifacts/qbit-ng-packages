import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatChipsModule, MatIconModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { QEventsService } from './services/events.service';

const modules = [MatIconModule, MatChipsModule, TranslateModule, CommonModule];

@NgModule({
  imports: modules,
  providers: [QEventsService],
  exports: modules,
})
export class SaCommonModule {}
