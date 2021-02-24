import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { SaAccountSelectorComponent } from './account-selector.component';

describe('SaAccountSelectorComponent', () => {
  let component: SaAccountSelectorComponent;
  let fixture: ComponentFixture<SaAccountSelectorComponent>;

  afterEach(() => {
    TestBed.resetTestingModule();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SaAccountSelectorComponent);
    component = fixture.componentInstance;
    component.accounts = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('select account emits', async(async () => {
    const spyer = { fn() {} };
    const spy = spyOn(spyer, 'fn');

    await component.selected.subscribe(spyer.fn);
    component.selectAccount(null);

    expect(spyer.fn).toHaveBeenCalled();
  }));
});
