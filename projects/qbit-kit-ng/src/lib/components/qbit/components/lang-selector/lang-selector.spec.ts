import { QCommonModule } from './../../../../common.module';
import { QLangSelectorComponent } from './lang-selector.component';
import { TestBed } from '@angular/core/testing';
import { QLangSelectorModule } from './lang-selector.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

describe('QLangSelectorComponent', () => {
  afterEach(() => {
    TestBed.resetTestingModule();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QLangSelectorModule, TranslateModule.forRoot()],
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

  // it('should set language correctly on init', () => {
  //   const fixture = TestBed.createComponent(QLangSelectorComponent);
  //   const app$: AppService = TestBed.get(AppService);
  //   app$.lang = LOCALES.en;

  //   fixture.componentInstance.lang = null;
  //   fixture.detectChanges();

  //   expect(fixture.componentInstance.lang).toEqual(LANG_METADATA[app$.lang]);
  // });

  // it('should set language correctly by method', () => {
  //   const { componentInstance } = TestBed.createComponent(QLangSelectorComponent);

  //   const langString = 'es';
  //   componentInstance.selectLang(LANG_METADATA[langString]);

  //   expect(componentInstance.lang).toEqual(LANG_METADATA[langString]);
  // });
});
