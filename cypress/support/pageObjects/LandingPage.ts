export default class LandingPage {
  private readonly url = 'http://localhost:3000';
  private readonly headerTitleId = '#linkta-title';
  private readonly earlyAccessPageButtonId = '#early-access-button';

  public open(): void {
    cy.visit(this.url);
  }

  public getHeaderTitle(): Cypress.Chainable {
    return cy.get(this.headerTitleId);
  }

  private getEarlyAccessButton(): Cypress.Chainable {
    return cy.get(this.earlyAccessPageButtonId);
  }

  public navigateToEarlyAccessPage(): void {
    this.getEarlyAccessButton().click();
  }
}
