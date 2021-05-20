import { AppModule } from 'src/app/app.module';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QTableHeaderComponent } from './table-header.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('QTableHeaderComponent', () => {
  let component: QTableHeaderComponent;
  let fixture: ComponentFixture<QTableHeaderComponent>;

  afterEach(() => {
    TestBed.resetTestingModule();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();
    fixture = TestBed.createComponent(QTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
