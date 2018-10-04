import { browser, by, element } from 'protractor';

export class AboutPage {
  navigateTo() {
    return browser.get('/about');
  }

  getAboutButton() {
    return element(by.css('[ng-reflect-router-link="about"]'));
  }

  getAboutTitleText() {
    return element(by.css('app-about h2')).getText();
  }

}
