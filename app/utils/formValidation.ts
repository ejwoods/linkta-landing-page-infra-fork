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
    ? 'Invalid email format. Please check for missing "@" or "." symbols, or invalid characters and try again'
    : null;
};

/**
 * Validates an email address for both minimum length and format.
 * @param {string} value - The email address to validate.
 * @returns {string|null} An error message if the email fails either min length or format validation, otherwise null.
 */
export const validateEmail = (value: string): string | null => {
  return validateMinLength(3, 'Email')(value) || validateEmailFormat(value);
};

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

const validateNameFormat = (value: string): string | null => {
  const nameRegex = /^[\p{Letter}\s\-.']+$/u;

  return !nameRegex.test(value)
    ? 'First name can only contain letters from any language, whitespace characters, hyphens (-), periods (.), apostrophes (\'), and right single quotation marks (\'). Please remove any other characters and try again.'
    : null;
};

export const validateName = (value: string): string | null => {
  return validateMinLength(1, 'Name')(value) || validateNameFormat(value);
};
