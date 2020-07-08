import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugScreenComponent } from './debug-screen.component';

describe('DebugScreenComponent', () => {
  let component: DebugScreenComponent;
  let fixture: ComponentFixture<DebugScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebugScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
