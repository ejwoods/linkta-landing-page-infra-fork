export default class LoginPage {
  private readonly url = 'http://localhost:3000';
  private readonly headerTitleId = '#linkta-title';

  public open(): void {
    cy.visit(this.url);
  }

  public getHeaderTitle(): Cypress.Chainable {
    return cy.get(this.headerTitleId);
  }
}
