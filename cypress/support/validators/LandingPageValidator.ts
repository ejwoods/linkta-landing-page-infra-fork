import LoginPage from '../pageObjects/LandingPage';

export default class LoginPageValidator {
  private readonly loginPage: LoginPage;

  public constructor(loginPage: LoginPage) {
    this.loginPage = loginPage;
  }

  public expectHeaderTitleToBe(expectedTitle: string): void {
    this.loginPage.getHeaderTitle().should('have.text', expectedTitle);
  }
}
