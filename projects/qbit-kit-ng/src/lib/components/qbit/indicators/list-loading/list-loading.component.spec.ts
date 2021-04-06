import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QListLoadingComponent } from './list-loading.component';
import { AppModule } from 'src/app/app.module';

describe('QListLoadingComponent', () => {
  let component: QListLoadingComponent;
  let fixture: ComponentFixture<QListLoadingComponent>;

  afterEach(() => {
    TestBed.resetTestingModule();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(QListLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
