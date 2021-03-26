import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { QDialogHeaderComponent } from './dialog-header.component';

describe('QDialogHeaderComponent', () => {
  let component: QDialogHeaderComponent;
  let fixture: ComponentFixture<QDialogHeaderComponent>;

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
    fixture = TestBed.createComponent(QDialogHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
