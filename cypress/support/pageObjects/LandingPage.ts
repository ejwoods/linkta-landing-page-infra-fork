export default class LandingPage {
  private readonly landingPageUrl = 'http://localhost:3000';
  private readonly earlyAccessUrl = `${this.landingPageUrl}/early-access`;
  private readonly headerTitleId = '#linkta-title';
  private readonly earlyAccessPageButtonId = '#early-access-button';

  public open(): void {
    cy.visit(this.landingPageUrl);
  }

  public getHeaderTitle(): Cypress.Chainable {
    return cy.get(this.headerTitleId);
  }

  private getEarlyAccessButton(): Cypress.Chainable {
    return cy.get(this.earlyAccessPageButtonId);
  }

  private retryIfEarlyAccessNotLoaded(attempts: number = 3): void {
    cy.url().then((currentUrl) => {
      if (currentUrl !== this.earlyAccessUrl && attempts > 0) {
        cy.get(this.earlyAccessPageButtonId).click();
        cy.wait(500);
        this.retryIfEarlyAccessNotLoaded(attempts - 1);
      }
    });
  }

  public navigateToEarlyAccessPage(): void {
    this.getEarlyAccessButton().click();
    this.retryIfEarlyAccessNotLoaded();
  }
}
