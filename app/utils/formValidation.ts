import { ValidationFunction } from '../types/signupForm';

/**
 * Validates if the string meets the minimum length requirement.
 * @param {number} minLength - The minimum number of characters required.
 * @param {string} field - The name of the field to validate.
 * @returns {string|null} An error message if validation fails, otherwise null.
 */
export const validateMinLength =
  (minLength: number, field: string) =>
  (value: string): string | null => {
    if (value.trim().length < minLength) {
      const pluralSuffix = minLength > 1 ? 's' : '';
      return `${field} must have at least ${minLength} letter${pluralSuffix}. Please try again.`;
    }
    return null;
  };

/**
 * Validates the format of an email address.
 * @param {string} value - The email address to validate.
 * @returns {string|null} An error message if the email format is invalid, otherwise null.
 */
const validateEmailFormat = (value: string): string | null => {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return !emailRegex.test(value)
    ? 'Email address can only contain letters, digits, periods (.), and special characters in the username, followed by (@) and a domain name or IP address. The domain name can contain letters, digits, hyphens (-), and periods (.). Please remove any invalid characters and try again.'
    : null;
};

/**
 * Validates an email address for both minimum length and format.
 * @param {string} value - The email address to validate.
 * @returns {string|null} An error message if the email fails either min length or format validation, otherwise null.
 */
export const validateEmail = (value: string): string | null => {
  return validateMinLength(6, 'Email')(value) || validateEmailFormat(value);
};

/**
 * Validates a string for optional minimum length.
 * @param {number} minLength - The minimum number of characters required.
 * @param {string} field - The name of the field to validate.
 * @returns {ValidationFunction} A validation function that takes a string value and returns an error message if validation fails, otherwise null.
 */
export const validateOptionalMinLength = (
  minLength: number,
  field: string
): ValidationFunction => {
  return (value: string | undefined) => {
    if (value === undefined || value.trim() === '') {
      return null;
    }

    return validateMinLength(minLength, field)(value);
  };
};

/**
 * Validates a name string for allowed characters.
 * @param {string} value - The name string to validate.
 * @returns {string|null} An error message if validation fails, otherwise null.
 */
const validateNameFormat = (value: string): string | null => {
  const nameRegex = /^[\p{Letter}\s\-.']+$/u;

  return !nameRegex.test(value)
    ? 'First name can only contain letters from any language, whitespace characters, hyphens (-), periods (.), apostrophes (\'), and right single quotation marks (\'). Please remove any other characters and try again.'
    : null;
};

/**
 * Validates a name string for both minimum length and allowed characters.
 * @param {string} value - The name string to validate.
 * @returns {string|null} An error message if validation fails, otherwise null.
 */
export const validateName = (value: string): string | null => {
  return validateMinLength(1, 'Name')(value) || validateNameFormat(value);
};
