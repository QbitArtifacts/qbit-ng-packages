import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatChipsModule,
  MatFormFieldModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { QCommonModule } from './common.module';
import { SaAccountSelectorModule } from './components/superadmin/selectors/account-selector/account-selector.module';
import { QEventsService } from './services/events.service';

const modules = [
  MatIconModule,
  MatChipsModule,
  MatSelectModule,
  MatFormFieldModule,
  MatMenuModule,
  MatListModule,
  TranslateModule,
  FormsModule,
  CommonModule,
  QCommonModule,
  SaAccountSelectorModule,
];

@NgModule({
  imports: modules,
  providers: [QEventsService],
  exports: modules,
})
export class SaCommonModule {}
