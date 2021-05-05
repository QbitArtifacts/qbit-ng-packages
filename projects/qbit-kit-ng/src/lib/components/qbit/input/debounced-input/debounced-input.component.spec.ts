import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebouncedInputComponent } from './debounced-input.component';

describe('DebouncedInputComponent', () => {
  let component: DebouncedInputComponent;
  let fixture: ComponentFixture<DebouncedInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebouncedInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebouncedInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
