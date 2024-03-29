import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { SaAdminAccountSelectorComponent } from './admin-account-selector.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SaAdminAccountSelectorComponent', () => {
  let component: SaAdminAccountSelectorComponent;
  let fixture: ComponentFixture<SaAdminAccountSelectorComponent>;

  afterEach(() => {
    TestBed.resetTestingModule();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SaAdminAccountSelectorComponent);
    component = fixture.componentInstance;
    component.items = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
