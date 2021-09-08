import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { QTableFiltersAddable } from './table-filters-addable.component';

describe('QTableFiltersAddable', () => {
  let component: QTableFiltersAddable;
  let fixture: ComponentFixture<QTableFiltersAddable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QTableFiltersAddable],
      imports: [RouterModule.forRoot([]), TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QTableFiltersAddable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
