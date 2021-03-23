import { AppModule } from 'src/app/app.module';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QTableHeaderComponent } from './table-header.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('QTableHeaderComponent', () => {
  let component: QTableHeaderComponent;
  let fixture: ComponentFixture<QTableHeaderComponent>;

  afterEach(() => {
    TestBed.resetTestingModule();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();
    fixture = TestBed.createComponent(QTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create with input', () => {
    component.options.input = true;
    fixture.detectChanges();

    const valueEl = fixture.debugElement.query(By.css('.search-input'));
    expect(valueEl).toBeTruthy();
  });

  it('should create without input', () => {
    component.options.input = false;
    fixture.detectChanges();

    const valueEl = fixture.debugElement.query(By.css('.search-input'));
    expect(valueEl).not.toBeTruthy();
  });

  it('clear works', () => {
    component.options.input = false;
    component.query = 'test';
    fixture.detectChanges();

    component.clear();

    expect(component.query).toBe('');
  });

  it('on search works', () => {
    component.options.newItem = true;
    fixture.detectChanges();

    const mock = {
      sub: () => {},
    };
    spyOn(mock, 'sub');
    component.onSearch.subscribe(mock.sub);
    component.search();

    expect(mock.sub).toHaveBeenCalled();
  });
});

describe('QTableHeaderComponent with route params', () => {
  let component: QTableHeaderComponent;
  let fixture: ComponentFixture<QTableHeaderComponent>;

  afterEach(() => {
    TestBed.resetTestingModule();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            // Mock
            queryParams: of({
              query: 'my search',
            }),
          },
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(QTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
