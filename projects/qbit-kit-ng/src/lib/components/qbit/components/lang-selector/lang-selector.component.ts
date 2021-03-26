import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { QLocalesService, QbitLocaleMetadata } from '../../../../services/locales.service';

@Component({
  selector: 'qbit-lang-selector',
  templateUrl: './lang-selector.html',
})
export class QLangSelectorComponent {
  constructor(public translate: TranslateService, public qlocales: QLocalesService) {}

  public selectLang(lang: QbitLocaleMetadata) {
    this.qlocales.selectLang(lang);
    this.qlocales.langChanged.emit(lang);
  }
}
