import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasteLinkComponent } from './caste-link.component';

describe('CasteLinkComponent', () => {
  let component: CasteLinkComponent;
  let fixture: ComponentFixture<CasteLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasteLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasteLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
