import { SaPermissionsSelectorComponent } from './permissions-selector.component';
import { TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SaPermissionsSelectorComponent', () => {
  afterEach(() => {
    TestBed.resetTestingModule();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, HttpClientTestingModule],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(SaPermissionsSelectorComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
