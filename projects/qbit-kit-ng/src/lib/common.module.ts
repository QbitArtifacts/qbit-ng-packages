import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatChipsModule, MatIconModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { PermissionsDirective } from './directives/permissions.directive';
import { QEventsService } from './services/events.service';

const modules = [MatIconModule, MatChipsModule, TranslateModule, CommonModule];

@NgModule({
  declarations: [PermissionsDirective],
  imports: modules,
  providers: [QEventsService],
  exports: [...modules, PermissionsDirective],
})
export class QCommonModule {}
