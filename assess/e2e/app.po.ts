import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getAppTitle() {
    return element(by.css('app-site-header h1')).getText();
  }

  //Home Page
  getHomeButton() {
    return element(by.css('[ng-reflect-router-link="./"]'));
  }

  getHomeTitleText() {
    return element(by.css('app-home h2')).getText();
  }

  /*getStartAssessmentButton() {
    return element(by.css(''))
  }*/

  //Prepare Page
  getPrepareButton() {
    return element(by.css('[ng-reflect-router-link="how-to-prepare"]'));
  }

  getPrepareTitleText() {
    return element(by.css('app-how-to-prepare h2')).getText();
  }

  //About Page
  getAboutButton() {
    return element(by.css('[ng-reflect-router-link="about"]'));
  }

  getAboutTitleText() {
    return element(by.css('app-about h2')).getText();
  }
}
