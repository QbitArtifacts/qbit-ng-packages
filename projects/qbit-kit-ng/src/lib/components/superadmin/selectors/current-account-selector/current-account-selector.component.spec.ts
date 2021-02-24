import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { MUserUser } from 'src/app/testing/mocks/users.mock';

import { CurrentAccountSelectorComponent } from './current-account-selector.component';

describe('CurrentAccountSelectorComponent', () => {
  let component: CurrentAccountSelectorComponent;
  let fixture: ComponentFixture<CurrentAccountSelectorComponent>;

  afterEach(() => {
    TestBed.resetTestingModule();
  }); beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentAccountSelectorComponent);
    component = fixture.componentInstance;
    component.accounts = [];
    component.user$.setUser(MUserUser);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
