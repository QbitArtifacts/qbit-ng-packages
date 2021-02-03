import { TestBed } from '@angular/core/testing';
import { CastePermissionsService } from './caste-permissions.service';

describe('CastePermissionsService', () => {
  afterEach(() => {
    TestBed.resetTestingModule();
  }); beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CastePermissionsService = TestBed.get(
      CastePermissionsService
    );
    expect(service).toBeTruthy();
  });
});
