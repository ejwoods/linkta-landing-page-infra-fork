import LoginPage from '../support/pageObjects/LandingPage';
import LoginPageValidator from '../support/validators/LandingPageValidator';

describe('Landing Page', () => {
  let loginPage: LoginPage;
  let loginPageValidator: LoginPageValidator;

  before(() => {
    loginPage = new LoginPage();
    loginPageValidator = new LoginPageValidator(loginPage);
  });

  it('should contain a header with the title Linkta', () => {
    loginPage.open();
    loginPageValidator.expectHeaderTitleToBe('Linkta');
  });
});
