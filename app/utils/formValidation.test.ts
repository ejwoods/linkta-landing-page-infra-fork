import { validateEmailFormat } from "./formValidation";
import { describe, it, expect } from '@jest/globals';

describe('validateEmailFormat', () => {

    it('should return null when given a valid email address', () => {
      const validEmail = 'test@example.com';
      const result = validateEmailFormat(validEmail);
      expect(result).toBeNull();
    });

    it('should return an error message when given an empty string', () => {
      const emptyString = '';
      const result = validateEmailFormat(emptyString);
      expect(result).toBe('Invalid email format. Please check for missing "@" or "." symbols, or invalid characters and try again');
    });
});
