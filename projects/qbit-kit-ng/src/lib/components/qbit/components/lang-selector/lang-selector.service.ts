import { EventEmitter, Inject, Injectable, InjectionToken, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface QbitLocaleMetadata {
  name: string;
  icon: string;
  abrev: string;
}

export interface QbitLocaleConfig {
  locales: QbitLocaleMetadata[];
  defaultLocale: QbitLocaleMetadata;
}

export const QBIT_LOCALES = new InjectionToken<QbitLocaleConfig>('qbit.lang.data');

@Injectable()
export class QLangSelectorService {
  @Input() public langs: QbitLocaleMetadata[];
  @Input() public lang: QbitLocaleMetadata;
  @Output() public langChanged: EventEmitter<QbitLocaleMetadata> = new EventEmitter();

  private storageKey: string = 'app:locales';

  constructor(@Inject(QBIT_LOCALES) qbitLocalesConfig: QbitLocaleConfig, public translate: TranslateService) {
    this.langs = qbitLocalesConfig.locales;
    this.lang = qbitLocalesConfig.defaultLocale;
  }

  setLang(lang: string) {}

  selectLang(lang: QbitLocaleMetadata) {
    this.translate.use(lang.abrev);
    localStorage.setItem(this.storageKey, lang.abrev);
    this.langChanged.emit(lang);
  }
}
