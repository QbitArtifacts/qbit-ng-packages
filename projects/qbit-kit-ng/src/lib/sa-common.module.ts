import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
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
