import { TestBed } from '@angular/core/testing';
import { CasteAccountsService } from './caste-accounts.service';


describe('CasteAccountsService', () => {
  afterEach(() => {
    TestBed.resetTestingModule();
  }); beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CasteAccountsService = TestBed.get(CasteAccountsService);
    expect(service).toBeTruthy();
  });
});
