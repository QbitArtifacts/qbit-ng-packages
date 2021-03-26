import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { QLangSelectorService, QbitLocaleMetadata } from './lang-selector.service';

@Component({
  selector: 'qbit-lang-selector',
  templateUrl: './lang-selector.html',
})
export class QLangSelectorComponent {
  constructor(public translate: TranslateService, public qlocales: QLangSelectorService) {}

  public setLang(lang: string) {
    this.qlocales.setLang(lang);
  }

  public selectLang(lang: QbitLocaleMetadata) {
    this.qlocales.selectLang(lang);
    this.qlocales.langChanged.emit(lang);
  }
}
