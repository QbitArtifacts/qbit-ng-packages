import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MUserUser } from '@qbitartifacts/caste-client-ng';
import { AppModule } from 'src/app/app.module';
import { SaCurrentAccountSelectorComponent } from './current-account-selector.component';

describe('SaCurrentAccountSelectorComponent', () => {
  let component: SaCurrentAccountSelectorComponent;
  let fixture: ComponentFixture<SaCurrentAccountSelectorComponent>;

  afterEach(() => {
    TestBed.resetTestingModule();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SaCurrentAccountSelectorComponent);
    component = fixture.componentInstance;
    component.user$.setUser(MUserUser);
    component.user$.user.accounts = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
