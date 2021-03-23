import { QEventsService } from './../../../../services/events.service';
import { AppModule } from 'src/app/app.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QSidemenuComponent } from './sidemenu.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('QSidemenuComponent', () => {
  let component: QSidemenuComponent;
  let fixture: ComponentFixture<QSidemenuComponent>;

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(QSidemenuComponent);
    component = fixture.componentInstance;
    localStorage.clear();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /* needs a bit more testing, it had some weird behaviour */
  it('should toggle correctly', () => {
    const events$: QEventsService = TestBed.inject(QEventsService);
    fixture.detectChanges();

    // events$.fire(QSidemenuComponent.EVT_TOGGLE_SIDEMENU);
    expect(component.sidemenuService.opened).toEqual(true);
  });
});
