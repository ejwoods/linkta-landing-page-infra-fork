import {
  disallowedCharsRegex,
  removeExtraWhiteSpaces,
  sanitizeText,
} from '../../../app/utils/formInputSanitization';

describe('User Data Sanitization Utility Functions', () => {
  describe('disallowedChars Regex', () => {
    it('should not match letters, numbers, and allowed punctuation', () => {
      const validInput = 'Linkta, Org. -  ';
      expect(validInput.match(disallowedCharsRegex)).toBeNull();
    });

    it('should match disallowed characters correctly in various scenarios', () => {
      const testCases = [
        {
          input: '@#$1',
          expected: ['@', '#', '$'],
        },
        {
          input: '✓✕〄',
          expected: ['✓', '✕', '〄'],
        },
        {
          input: 'Linkta; Org^*',
          expected: [';', '^', '*'],
        },
      ];

      testCases.forEach((testCase) => {
        const matches = testCase.input.match(disallowedCharsRegex);
        expect(matches).toEqual(testCase.expected);
      });
    });

    it('should handle empty strings correctly', () => {
      const emptyString = '';
      const matches = emptyString.match(disallowedCharsRegex);
      expect(matches).toBeNull();
    });

    it('should not match entirely valid strings with multiple allowed characters', () => {
      const complexValidInput = '1234, Linkta - (2024)';
      expect(complexValidInput.match(disallowedCharsRegex)).toBeNull();
    });

    it('should not match when there are no disallowed characters', () => {
      const noSpecialChars = 'Linkta Org 123';
      const matches = noSpecialChars.match(disallowedCharsRegex);
      expect(matches).toBeNull();
    });
  });

  describe('removeExtraWhiteSpaces', () => {
    it('should handle an empty input string', () => {
      const input = '';
      const expected = '';
      expect(removeExtraWhiteSpaces(input)).toBe(expected);
    });

    it('should handle an input with no whitespaces', () => {
      const input = 'hellolinkta';
      const expected = 'hellolinkta';
      expect(removeExtraWhiteSpaces(input)).toBe(expected);
    });

    it('should remove leading and trailing whitespaces', () => {
      const input = '   hello linkta   ';
      const expected = 'hello linkta';
      expect(removeExtraWhiteSpaces(input)).toBe(expected);
    });

    it('should replace multiple consecutive whitespaces with a single space', () => {
      const input = 'hello    linkta   with   extra   spaces';
      const expected = 'hello linkta with extra spaces';
      expect(removeExtraWhiteSpaces(input)).toBe(expected);
    });

    it('should handle an input with different types of whitespaces', () => {
      const input = 'hello\tlinkta\nwith\r\ntabs';
      const expected = 'hello linkta with tabs';
      expect(removeExtraWhiteSpaces(input)).toBe(expected);
    });

    it('should handle an input with only whitespaces', () => {
      const input = '    ';
      const expected = '';
      expect(removeExtraWhiteSpaces(input)).toBe(expected);
    });
  });

  describe('sanitizeText', () => {
    const disallowedCharsRegexMock = /[@#$]/g;

    it('should handle empty strings', () => {
      const input = '';
      const expected = '';

      const result = sanitizeText(input, disallowedCharsRegexMock);

      expect(result).toBe(expected);
    });

    it('should replace disallowed characters with spaces using the provided regex', () => {
      const input = 'Hello, Linkta!@#$';
      const expected = 'Hello, Linkta!   ';

      const result = sanitizeText(input, disallowedCharsRegexMock);

      expect(result).toBe(expected);
    });

    it('should handle strings with only allowed characters', () => {
      const input = 'Hello, Linkta!';
      const expected = 'Hello, Linkta!';

      const result = sanitizeText(input, disallowedCharsRegexMock);

      expect(result).toBe(expected);
    });
  });
});
