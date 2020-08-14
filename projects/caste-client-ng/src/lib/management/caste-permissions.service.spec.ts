import { TestBed } from '@angular/core/testing';
import { CastePermissionsService } from './caste-permissions.service';

describe('CastePermissionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CastePermissionsService = TestBed.get(
      CastePermissionsService
    );
    expect(service).toBeTruthy();
  });
});
