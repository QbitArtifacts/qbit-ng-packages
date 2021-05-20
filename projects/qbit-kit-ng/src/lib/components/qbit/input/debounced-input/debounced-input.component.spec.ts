import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { QDebouncedInput } from './debounced-input.component';

describe('QDebouncedInput', () => {
  let component: QDebouncedInput;
  let fixture: ComponentFixture<QDebouncedInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [QDebouncedInput],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QDebouncedInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
