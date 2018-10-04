import { AboutPage } from "./about-page.po";

describe('About Page', () => {
  let page: AboutPage;

  beforeEach(() => {
    page = new AboutPage();
  });

  it('should display an about button', () => {
    page.navigateTo();
    expect(page.getAboutButton().getText()).toEqual('About');
  });

  it('should route to the about page when the about button is clicked', () => {
    page.navigateTo();
    page.getAboutButton().click();
    expect(page.getAboutTitleText()).toEqual('About');
  });
});
