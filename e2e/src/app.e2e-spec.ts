import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('App', () => {
  let page: AppPage;

  afterEach(() => {
    TestBed.resetTestingModule();
  }); beforeEach(() => {
    page = new AppPage();
  });

  it('should load login page', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Login | Trading Bots');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
