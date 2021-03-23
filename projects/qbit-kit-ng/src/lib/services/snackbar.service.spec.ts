import { AppModule } from 'src/app/app.module';
import { TestBed } from '@angular/core/testing';
import { QSnackBar } from './snackbar.service';

describe('QSnackBar', () => {
  afterEach(() => {
    TestBed.resetTestingModule();
  });
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [QSnackBar],
    }),
  );

  it('should be created', () => {
    const service: QSnackBar = TestBed.get(QSnackBar);
    expect(service).toBeTruthy();
  });
});
