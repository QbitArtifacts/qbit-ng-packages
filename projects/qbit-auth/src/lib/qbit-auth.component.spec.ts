import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QbitAuthComponent } from './qbit-auth.component';

describe('QbitAuthComponent', () => {
  let component: QbitAuthComponent;
  let fixture: ComponentFixture<QbitAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QbitAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QbitAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
