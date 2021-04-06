import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { QSelectorComponent } from './selector.component';

describe('QSelectorComponent', () => {
  let component: QSelectorComponent;
  let fixture: ComponentFixture<QSelectorComponent>;

  afterEach(() => {
    TestBed.resetTestingModule();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(QSelectorComponent);
    component = fixture.componentInstance;
    component.items = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('select account emits', async(async () => {
    const spyer = { fn() {} };
    const spy = spyOn(spyer, 'fn');

    await component.selected.subscribe(spyer.fn);
    component.select(null);

    expect(spyer.fn).toHaveBeenCalled();
  }));
});
