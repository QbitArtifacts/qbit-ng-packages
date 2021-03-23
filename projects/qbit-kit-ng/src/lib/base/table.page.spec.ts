import { AppModule } from 'src/app/app.module';
import { async, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { QTableBase } from './table.page';
import { Observable } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  template: '',
})
class TestPage extends QTableBase<any> {
  getRemoveItemDialog(id: string): MatDialogRef<any, any> {
    throw new Error('Method not implemented.');
  }
  getOwner(): string {
    throw new Error('Method not implemented.');
  }
  getRemoveItemObservable(id: string, userType?: string): Observable<any> {
    throw new Error('Method not implemented.');
  }

  getSearchObservable(queryParams: { [key: string]: string }, userType?: string): Observable<any> {
    throw new Error('Method not implemented.');
  }

  displayedColumns: string[];

  /* public onSearch(): void {
    throw new Error('Method not implemented.');
  }*/
}

describe('PageBaseComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [TestPage],
    }).compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(TestPage);
    fixture.detectChanges();

    const component = fixture.componentInstance;

    expect(component).toBeTruthy();
  });

  it('setIsLoading', () => {
    const fixture = TestBed.createComponent(TestPage);
    const component = fixture.componentInstance;

    component.setIsLoading(true);

    expect(component.isLoading).toEqual(true);
  });

  it('setData', () => {
    const fixture = TestBed.createComponent(TestPage);
    const component = fixture.componentInstance;
    component.setData([]);

    expect(component.dataSource.data).toEqual([]);
  });
});
