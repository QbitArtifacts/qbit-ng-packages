import { TestBed } from '@angular/core/testing';

import { DebugScreenService } from './debug-screen.service';

describe('DebugScreenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DebugScreenService = TestBed.get(DebugScreenService);
    expect(service).toBeTruthy();
  });
});
