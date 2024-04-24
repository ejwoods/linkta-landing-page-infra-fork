import {
  sanitizeText,
  removeExtraWhiteSpaces,
  sanitizeAndTrimText,
} from '../../../app/utils/formInputSanitization';

jest.mock('../../../app/utils/formInputSanitization', () => ({
  ...jest.requireActual('../../../app/utils/formInputSanitization'),
  sanitizeText: jest.fn(),
  removeExtraWhiteSpaces: jest.fn(),
}));

describe('sanitizeAndTrimText', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const cases = [
    {
      input: 'Hello,   Linkta!@#$   ',
      sanitized: 'Hello,   Linkta!   ',
      trimmed: 'Hello, Linkta',
    },
    {
      input: 'Test!!! &&& Linkta***  ',
      sanitized: 'Test &&& Linkta  ',
      trimmed: 'Test &&& Linkta',
    },
  ];

  cases.forEach(({ input, sanitized, trimmed }) => {
    it(`should sanitize and trim text correctly for input: ${input}`, () => {
      (sanitizeText as jest.Mock).mockReturnValueOnce(sanitized);
      (removeExtraWhiteSpaces as jest.Mock).mockReturnValueOnce(trimmed);
      const result = sanitizeAndTrimText(input);
      expect(result).toBe(trimmed);
    });
  });
});
