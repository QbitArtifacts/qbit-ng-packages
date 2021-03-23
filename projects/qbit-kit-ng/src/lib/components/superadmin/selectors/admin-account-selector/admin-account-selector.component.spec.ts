import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { MUserUser } from 'src/app/testing/mocks/users.mock';
import { AdminAccountSelectorComponent } from './admin-account-selector.component';

describe('AdminAccountSelectorComponent', () => {
  let component: AdminAccountSelectorComponent;
  let fixture: ComponentFixture<AdminAccountSelectorComponent>;

  afterEach(() => {
    TestBed.resetTestingModule();
  }); beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminAccountSelectorComponent);
    component = fixture.componentInstance;
    component.accounts = [];
    component.user$.setUser(MUserUser);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
