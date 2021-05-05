import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';
import { PermissionsDirective } from './directives/permissions.directive';
import { QEventsService } from './services/events.service';
import { MatTooltipModule } from '@angular/material/tooltip';

const modules = [
  MatIconModule,
  MatChipsModule,
  MatTooltipModule,
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
