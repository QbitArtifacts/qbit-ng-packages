import { AppModule } from 'src/app/app.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { QTableBase } from './table.page';
import { Observable } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs/internal/observable/of';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { QSnackBarModule } from '../../public-api';

@Component({
  template: '',
})
class TestPage extends QTableBase<any> {
  getRemoveItemDialog(id: string): MatDialogRef<any, any> {
    throw new Error('Method not implemented.');
  }

  getOwner(): string {
    return null;
  }

  getRemoveItemObservable(id: string, userType?: string): Observable<any> {
    return of({});
  }

  getSearchObservable(queryParams: { [key: string]: string }, userType?: string): Observable<any> {
    return of({});
  }

  displayedColumns: string[];
}

describe('QTableBase', () => {
  let fixture: ComponentFixture<TestPage>;
  let component: TestPage;

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, HttpClientTestingModule, QSnackBarModule],
      declarations: [TestPage],
    }).compileComponents();

    fixture = TestBed.createComponent(TestPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('setIsLoading', () => {
    component.setIsLoading(true);
    expect(component.isLoading).toEqual(true);
  });

  it('setData', () => {
    component.setData([]);
    expect(component.dataSource.data).toEqual([]);
  });
});
