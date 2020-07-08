import { TestBed } from '@angular/core/testing';

import { QbitAuthService } from './qbit-auth.service';

describe('QbitAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QbitAuthService = TestBed.get(QbitAuthService);
    expect(service).toBeTruthy();
  });
});
