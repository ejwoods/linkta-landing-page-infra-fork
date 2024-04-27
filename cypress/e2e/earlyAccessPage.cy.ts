// import EarlyAccessPage from '../support/pageObjects/EarlyAccessPage';
// import EarlyAccessPageValidator from '../support/validators/EarlyAccessPageValidator';
// import LandingPage from '../support/pageObjects/LandingPage';

// describe('Early Access Page', () => {
//   let landingPage: LandingPage;
//   let earlyAccessPage: EarlyAccessPage;
//   let earlyAccessPageValidator: EarlyAccessPageValidator;

//   beforeEach(() => {
//     landingPage = new LandingPage();
//     earlyAccessPage = new EarlyAccessPage();
//     earlyAccessPageValidator = new EarlyAccessPageValidator(earlyAccessPage);

//     landingPage.open();
//     landingPage.navigateToEarlyAccessPage();
//   });

//   it('should validate if name input contains special characters', () => {
//     earlyAccessPage.setName('Fake Name!@#');
//     earlyAccessPageValidator.expectErrorNameContainsSpecialCharacters();
//   });

//   it('should validate if email input is incorrect', () => {
//     earlyAccessPage.setEmail('fake@email');
//     earlyAccessPageValidator.expectErrorEmailAddressIncorrect();
//   });
// });
