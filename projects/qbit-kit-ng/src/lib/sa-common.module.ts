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
import { CASTE_AUTH_CONFIG } from '@qbitartifacts/caste-client-ng';
import { QCommonModule } from './common.module';
import { QSearchableSelectorModule } from './components/qbit/input/searchable-selector/searchable-selector.module';
import { QSelectorModule } from './components/qbit/input/selector/selector.module';
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
  QSelectorModule,
  QSearchableSelectorModule,
];

@NgModule({
  imports: modules,
  providers: [
    QEventsService,
    {
      provide: CASTE_AUTH_CONFIG,
      useValue: {
        realm: 'default',
        url: 'https://api.caste.qbitartifacts.com',
        baseHeaders: {
          accept: 'application/json',
          'content-type': 'application/json',
        },
        tokenStorageKey: 'qbit:auth:token',
      },
    },
  ],
  exports: modules,
})
export class SaCommonModule {}
