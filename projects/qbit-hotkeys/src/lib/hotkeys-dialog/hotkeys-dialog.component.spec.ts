import { HotkeysModule } from './../hotkeys.module';
import { TranslateModule } from '@ngx-translate/core';
import { SHORTCUTS } from 'src/config/shortcuts';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HotkeysDialogComponent } from './hotkeys-dialog.component';
import { By, BrowserModule } from '@angular/platform-browser';
import { HotkeysService } from '../../public-api';
import { FormsModule } from '@angular/forms';
import { TranslateMockModule } from 'src/app/testing/mocks/ngx-translate.mock';

const hotkeysMock: Map<any, any> = new Map();
hotkeysMock.set(SHORTCUTS.debugScreen.keys, SHORTCUTS.debugScreen.description);

describe('HotkeysDialogComponent', () => {
  let component: HotkeysDialogComponent;
  let fixture: ComponentFixture<HotkeysDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: hotkeysMock,
        },
        HotkeysService,
      ],
      declarations: [HotkeysDialogComponent],
      imports: [BrowserModule, FormsModule, TranslateMockModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotkeysDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show data', () => {
    const expected = Array.from(hotkeysMock).map((el) => {
      return [el[0].split('.'), el[1], el[0]];
    });

    expect(component.hotkeys).toEqual(expected);
  });

  it('should render', () => {
    const titleEl = fixture.debugElement.queryAll(By.css('.hotkey-row'));
    expect(titleEl.length).toEqual(1);

    const firstRowValue = titleEl[0].query(By.css('.row-desc')).nativeElement
      .textContent;
    expect(firstRowValue).toEqual(SHORTCUTS.debugScreen.description);
  });

  it('.filter should work with findable query', () => {
    component.search = 'SHORTCUT:DEBUG_SCREEN';
    component.filter();

    expect(component.dataSource.length).toEqual(1);
  });

  it('.filter should work with non findable query', () => {
    component.search = '11111';
    component.filter();

    expect(component.dataSource.length).toEqual(0);
  });
});
