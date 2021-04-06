import { Component } from '@angular/core';
import { QLocalesService, QbitLocaleMetadata } from '../../../../services/locales.service';

@Component({
  selector: 'qbit-lang-selector',
  templateUrl: './lang-selector.html',
})
export class QLangSelectorComponent {
  constructor(public qlocales: QLocalesService) {}

  public selectLang(lang: QbitLocaleMetadata) {
    this.qlocales.selectLang(lang);
    this.qlocales.langChanged.emit(lang);
  }
}
