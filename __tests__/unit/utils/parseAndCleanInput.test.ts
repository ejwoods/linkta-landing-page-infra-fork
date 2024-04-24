import {
  sanitizeText,
  removeExtraWhiteSpaces,
  sanitizeAndTrimText,
  parseAndCleanInput,
} from '../../../app/utils/formInputSanitization';

jest.mock('../../../app/utils/formInputSanitization', () => ({
  ...jest.requireActual('../../../app/utils/formInputSanitization'),
  sanitizeAndTrimText: jest.fn(),
}));

describe('parseAndCleanInput', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns an empty array when input is null or undefined', () => {
    expect(parseAndCleanInput(null)).toEqual([]);
    expect(parseAndCleanInput(undefined)).toEqual([]);
  });

  it('returns an empty array when input is an empty string', () => {
    expect(parseAndCleanInput('')).toEqual([]);
  });

  it('splits input string by commas and cleans each part', () => {
    const input = ' hello , world,,   test   ';
    const expected = ['hello', 'world', 'test'];
    expect(parseAndCleanInput(input)).toEqual(expected);
  });

  it('filters out empty or only-space strings after sanitization', () => {
    const input = ' , , ,,, , test, , ';
    const expected = ['test'];
    expect(parseAndCleanInput(input)).toEqual(expected);
  });
});
