import { TestBed } from '@angular/core/testing';
import { CasteUserService } from './caste-user.service';

describe('CasteUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CasteUserService = TestBed.get(CasteUserService);
    expect(service).toBeTruthy();
  });
});
