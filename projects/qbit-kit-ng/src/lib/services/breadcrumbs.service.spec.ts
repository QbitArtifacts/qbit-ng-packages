import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { QBreadcrumbsService } from './breadcrumbs.service';

describe('QBreadcrumbsService', () => {
  let service: QBreadcrumbsService;

  afterEach(() => {
    TestBed.resetTestingModule();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, HttpClientTestingModule],
      providers: [QBreadcrumbsService],
    });
  });

  it('should be created', () => {
    service = TestBed.inject(QBreadcrumbsService);
    expect(service).toBeTruthy();
  });
});
