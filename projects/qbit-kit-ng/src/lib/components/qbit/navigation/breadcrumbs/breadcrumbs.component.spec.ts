import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { QBreadcrumbsComponent } from './breadcrumbs.component';

describe('QBreadcrumbsComponent', () => {
  let component: QBreadcrumbsComponent;
  let fixture: ComponentFixture<QBreadcrumbsComponent>;

  afterEach(() => {
    TestBed.resetTestingModule();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();
    fixture = TestBed.createComponent(QBreadcrumbsComponent);
    component = fixture.componentInstance;
  });
  
  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
