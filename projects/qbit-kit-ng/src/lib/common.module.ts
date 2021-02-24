import { NgModule } from '@angular/core';
import { QEventsService } from './services/events.service';

@NgModule({
  providers: [QEventsService],
  exports: [QEventsService],
})
export class SaCommonModule {}
