import { QLoadableButtonComponent } from './loadable-button.component';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { QLoadableButtonModule } from './loadable-button.module';
import { TestBed } from '@angular/core/testing';

@Component({
  template: `<qbit-loadable-button><div id="test-content">LOGIN</div></qbit-loadable-button>`,
})
class TestQLoadableButtonComponent {}

describe('QLoadableButtonComponent', () => {
  afterEach(() => {
    TestBed.resetTestingModule();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestQLoadableButtonComponent],
      imports: [QLoadableButtonModule],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(QLoadableButtonComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should set ng-content correctly', () => {
    const testFixture = TestBed.createComponent(TestQLoadableButtonComponent);
    testFixture.detectChanges();

    const de: DebugElement = testFixture.debugElement.query(By.css('#test-content'));

    expect(de.nativeElement.textContent).toEqual('LOGIN');
  });

  it('should propagate onClick correctly', async () => {
    const testFixture = TestBed.createComponent(QLoadableButtonComponent);
    const mock = {
      sub: (evt) => console.log('clicked'),
    };
    spyOn(mock, 'sub');

    testFixture.detectChanges();

    testFixture.componentInstance.clicked.subscribe(mock.sub);
    testFixture.debugElement.query(By.css('#loadable-btn')).nativeElement.click();

    expect(mock.sub).toHaveBeenCalled();
  });
});
