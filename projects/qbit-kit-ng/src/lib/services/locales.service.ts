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
export class QLocalesService {
  @Input() public langs: QbitLocaleMetadata[];
  @Input() public lang: QbitLocaleMetadata;
  @Output() public langChanged: EventEmitter<QbitLocaleMetadata> = new EventEmitter();

  private storageKey: string = 'app:locales';

  constructor(@Inject(QBIT_LOCALES) public qbitLocalesConfig: QbitLocaleConfig, public translate: TranslateService) {
    this.langs = qbitLocalesConfig.locales;
    this.lang = qbitLocalesConfig.defaultLocale;

    const storedLang = localStorage.getItem(this.storageKey);
    if (!storedLang) return;

    const foundLang = this.langs.find((el) => el.abrev === storedLang);
    if (foundLang) {
      this.lang = foundLang;
    }
  }

  setup() {
    this.translate.setDefaultLang(this.qbitLocalesConfig.defaultLocale.abrev);
    this.translate.use(this.lang.abrev);
  }

  selectLang(lang: QbitLocaleMetadata) {
    this.lang = lang;
    this.translate.use(lang.abrev);
    localStorage.setItem(this.storageKey, lang.abrev);
    this.langChanged.emit(lang);
  }
}
