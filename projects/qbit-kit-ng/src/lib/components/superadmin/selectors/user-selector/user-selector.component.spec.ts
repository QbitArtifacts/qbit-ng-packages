import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaUserSelectorComponent } from './user-selector.component';
import { AppModule } from 'src/app/app.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SaUserSelectorComponent', () => {
  let component: SaUserSelectorComponent;
  let fixture: ComponentFixture<SaUserSelectorComponent>;

  afterEach(() => {
    TestBed.resetTestingModule();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SaUserSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
