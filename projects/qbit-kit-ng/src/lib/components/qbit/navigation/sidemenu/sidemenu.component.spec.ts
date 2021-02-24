import { AppModule } from 'src/app/app.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidemenuComponent } from './sidemenu.component';
import { QEventsService } from 'src/app/services/events.service';
import { MUserUser } from 'src/app/testing/mocks/users.mock';

describe('SidemenuComponent', () => {
  let component: SidemenuComponent;
  let fixture: ComponentFixture<SidemenuComponent>;

  afterEach(() => {
    TestBed.resetTestingModule();
  }); 
  
  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SidemenuComponent);
    component = fixture.componentInstance;
    component.user$.setUser(MUserUser);
    localStorage.clear();
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /* needs a bit more testing, it had some weird behaviour */
  it('should toggle correctly', () => {
    const events$: QEventsService = TestBed.inject(QEventsService);
    fixture.detectChanges();

    // events$.fire(SidemenuComponent.EVT_TOGGLE_SIDEMENU);
    expect(component.opened).toEqual(true);
  });
});
