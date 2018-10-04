import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('cloud-assessment App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  //Header
  it('should display the app title in the header', () => {
    page.navigateTo();
    expect(page.getAppTitle()).toEqual('Cloud Assessment Tool beta');
  });

  //Home Page
  it('should display a home button', () => {
    page.navigateTo();
    expect(page.getHomeButton().getText()).toEqual('Home');
  });

  it('should route to the home page when the home button is clicked', () => {
    page.navigateTo();
    page.getHomeButton().click();
    expect(page.getHomeTitleText()).toEqual('Start an assessment');
  });

  //Prepare Page
  it('should display a prepare button', () => {
    page.navigateTo();
    expect(page.getPrepareButton().getText()).toEqual('Prepare');
  });

  it('should route to the prepare page when the prepare button is clicked', () => {
    page.navigateTo();
    page.getPrepareButton().click();
    expect(page.getPrepareTitleText()).toEqual('Preparing for an assessment');
  });

  //About Page
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
