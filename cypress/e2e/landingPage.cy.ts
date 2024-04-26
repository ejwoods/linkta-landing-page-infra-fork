import LandingPage from '../support/pageObjects/LandingPage';
import LandingPageValidator from '../support/validators/LandingPageValidator';

describe('Landing Page', () => {
  let landingPage: LandingPage;
  let landingPageValidator: LandingPageValidator;

  before(() => {
    landingPage = new LandingPage();
    landingPageValidator = new LandingPageValidator(landingPage);
  });

  it('should contain a header with the title Linkta', () => {
    landingPage.open();
    landingPageValidator.expectHeaderTitleToBe('Linkta');
  });
});
