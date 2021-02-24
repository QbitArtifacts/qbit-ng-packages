import { TestBed } from '@angular/core/testing';
import { QBreadcrumbsService } from './breadcrumbs.service';

describe('QBreadcrumbsService', () => {
  let service: QBreadcrumbsService;

  afterEach(() => {
    TestBed.resetTestingModule();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QBreadcrumbsService],
    });
  });

  it('should be created', () => {
    service = TestBed.get(QBreadcrumbsService);
    expect(service).toBeTruthy();
  });
});
