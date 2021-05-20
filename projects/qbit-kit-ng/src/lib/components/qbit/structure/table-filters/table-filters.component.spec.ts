import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { QTableFilters } from './table-filters.component';

describe('QTableFilters', () => {
  let component: QTableFilters;
  let fixture: ComponentFixture<QTableFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QTableFilters],
      imports: [RouterModule.forRoot([]), TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QTableFilters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
