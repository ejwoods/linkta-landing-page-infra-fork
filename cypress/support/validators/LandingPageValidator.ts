import LandingPage from '../pageObjects/LandingPage';

export default class LandingPageValidator {
  private readonly landingPage: LandingPage;

  public constructor(landingPage: LandingPage) {
    this.landingPage = landingPage;
  }

  public expectHeaderTitleToBe(expectedTitle: string): void {
    this.landingPage.getHeaderTitle().should('have.text', expectedTitle);
  }
}
