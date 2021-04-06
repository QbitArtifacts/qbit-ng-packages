import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QAddButtonComponent } from './add-button.component';
import { AppModule } from 'src/app/app.module';

describe('QAddButtonComponent', () => {
  let component: QAddButtonComponent;
  let fixture: ComponentFixture<QAddButtonComponent>;

  afterEach(() => {
    TestBed.resetTestingModule();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(QAddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
