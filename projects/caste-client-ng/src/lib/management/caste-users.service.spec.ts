import { TestBed } from '@angular/core/testing';
import { CasteUsersService } from './caste-users.service';


describe('CasteUsersService', () => {
  afterEach(() => {
    TestBed.resetTestingModule();
  }); beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CasteUsersService = TestBed.get(CasteUsersService);
    expect(service).toBeTruthy();
  });
});
