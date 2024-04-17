export const validateMinLength = (minLength: number, field: string) => (value: string) => {
  return value.trim().length < minLength ? `${field} must have at least ${minLength} letters. Please try again.` : null;
}

/**
 * Validates the format of an email address.
 * @param {string} value - The email address to validate.
 * @returns {string|null} An error message if the email format is invalid (local-part@domain.TLD, with optional subdomains), otherwise null.
 **/
export const validateEmail = (value: string) => {
  if (value.trim().length < 3) {
    return 'Email must have at least 3 letters. Pleaes try again.';
  }

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (!emailRegex.test(value)) {
    return 'Invalid email format. Please check for missing "@" or "." symbols, or invalid characters and try again';
  }

  return null;
}
