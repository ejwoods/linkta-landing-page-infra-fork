import EarlyAccessPage from '../pageObjects/EarlyAccessPage';

enum ErrorMessages {
  NameContainsSpecialCharacters = 'Looks like your name contains some special characters. Could you check it again?',
  EmailAddressIncorrect = 'Oops, the email address seems incorrect. Could you check it again?',
}

export default class EarlyAccessPageValidator {
  private readonly earlyAccessPage: EarlyAccessPage;

  public constructor(earlyAccessPage: EarlyAccessPage) {
    this.earlyAccessPage = earlyAccessPage;
  }

  public expectErrorNameContainsSpecialCharacters(): void {
    this.earlyAccessPage
      .getNameErrorMessage()
      .should('have.text', ErrorMessages.NameContainsSpecialCharacters);
  }

  public expectErrorEmailAddressIncorrect(): void {
    this.earlyAccessPage
      .getEmailErrorMessage()
      .should('have.text', ErrorMessages.EmailAddressIncorrect);
  }
}
