import { QBIT_LOCALES, QLocalesService } from './../../../../services/locales.service';
import { QCommonModule } from './../../../../common.module';
import { QLangSelectorComponent } from './lang-selector.component';
import { TestBed } from '@angular/core/testing';
import { QLangSelectorModule } from './lang-selector.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
const langMetadata = {
  name: 'string',
  icon: 'string',
  abrev: 'string',
};

const qbitLocaleConfig = {
  locales: [langMetadata],
  defaultLocale: langMetadata,
};

describe('QLangSelectorComponent', () => {
  afterEach(() => {
    TestBed.resetTestingModule();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QLangSelectorModule, TranslateModule.forRoot()],
      providers: [{ provide: QBIT_LOCALES, useValue: qbitLocaleConfig }],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(QLangSelectorComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should work aftrer change detection', () => {
    const fixture = TestBed.createComponent(QLangSelectorComponent);
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should select language', () => {
    const qlocales = TestBed.inject(QLocalesService);
    const fixture = TestBed.createComponent(QLangSelectorComponent);

    fixture.componentInstance.selectLang(langMetadata);

    expect(qlocales.lang).toEqual(langMetadata);
  });
});
