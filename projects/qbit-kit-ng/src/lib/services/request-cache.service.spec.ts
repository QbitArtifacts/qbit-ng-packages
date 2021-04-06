import { TestBed } from '@angular/core/testing';
import { RequestCacheModule } from '../request-cache.module';
import { RequestCacheService } from './request-cache.service';

describe('RequestCacheService', () => {
  let service: RequestCacheService;

  afterEach(() => {
    TestBed.resetTestingModule();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RequestCacheModule],
    });
  });

  it('should be created', () => {
    service = TestBed.inject(RequestCacheService);
    expect(service).toBeTruthy();
  });

  it('set works', () => {
    service = TestBed.inject(RequestCacheService);
    service.setMaxAge(10e3);

    const testData = { test: 'hello' };
    service.set('key', testData);

    expect(service.has('key')).toBeTruthy();
  });

  it('get works if not expired', () => {
    service = TestBed.inject(RequestCacheService);
    service.setMaxAge(10e3);

    const testData = { test: 'hello' };
    service.set('key', testData);

    expect(service.get('key')).toEqual(testData);
  });

  it('get works if expired', () => {
    service = TestBed.inject(RequestCacheService);
    service.setMaxAge(-10);

    const testData = { test: 'hello' };
    service.set('key', testData);

    expect(service.get('key')).toBeFalsy();
  });

  it('get after expired', (done) => {
    service = TestBed.inject(RequestCacheService);
    service.setMaxAge(10);

    const testData = { test: 'hello' };
    service.set('key', testData);

    setTimeout(() => {
      expect(service.get('key')).toBeFalsy();
      done();
    }, 20);
  });

  it('set updates correctly', () => {
    service = TestBed.inject(RequestCacheService);
    service.setMaxAge(-10);

    const testData = { test: 'hello' };
    service.set('key', testData);

    expect(service.count()).toEqual(0);
  });
});
