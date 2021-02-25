import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatChipsModule, MatFormFieldModule, MatIconModule, MatMenuModule, MatSelectModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { PermissionsDirective } from './directives/permissions.directive';
import { QEventsService } from './services/events.service';

const modules = [
  MatIconModule,
  MatChipsModule,
  TranslateModule,
  CommonModule,
  MatSelectModule,
  MatFormFieldModule,
  FormsModule,
  MatMenuModule,
];

@NgModule({
  declarations: [PermissionsDirective],
  imports: modules,
  providers: [QEventsService],
  exports: [...modules, PermissionsDirective],
})
export class QCommonModule {}
