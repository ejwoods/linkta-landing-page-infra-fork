export default class EarlyAccessPage {
  private readonly nameInputId = '#name-input';
  private readonly emailInputId = '#email-input';
  private readonly nameInputErrorId = '#name-input-error';
  private readonly emailInputErrorId = '#email-input-error';

  public getNameErrorMessage(): Cypress.Chainable {
    return cy.get(this.nameInputErrorId);
  }

  public getEmailErrorMessage(): Cypress.Chainable {
    return cy.get(this.emailInputErrorId);
  }

  public setName(name: string): Cypress.Chainable {
    return cy.get(this.nameInputId).type(`${name}{enter}`);
  }

  public setEmail(email: string): Cypress.Chainable {
    return cy.get(this.emailInputId).type(`${email}{enter}`);
  }
}
