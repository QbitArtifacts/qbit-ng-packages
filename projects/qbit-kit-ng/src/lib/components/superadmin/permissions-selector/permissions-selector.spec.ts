import { PermissionsSelector } from './permissions-selector.component';
import { TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

describe('PermissionsSelector', () => {
  afterEach(() => {
    TestBed.resetTestingModule();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PermissionsSelector);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
