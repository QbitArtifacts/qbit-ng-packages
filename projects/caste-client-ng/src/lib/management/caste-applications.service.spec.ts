import { TestBed } from '@angular/core/testing';
import { CasteApplicationService } from './caste-applications.service';

describe('CasteApplicationService', () => {
  afterEach(() => {
    TestBed.resetTestingModule();
  }); beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CasteApplicationService = TestBed.get(
      CasteApplicationService
    );
    expect(service).toBeTruthy();
  });
});
