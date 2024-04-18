export const validateMinLength = (minLength: number, field: string) => (value: string) => {
  if (value.trim().length < minLength) {
    const pluralSuffix = minLength > 1 ? 's' : '';
    return `${field} must have at least ${minLength} letter${pluralSuffix}. Please try again.`;
  }
  return null;
}

export const validateEmailFormat = (value: string) => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return !emailRegex.test(value) ? 'Invalid email format. Please check for missing "@" or "." symbols, or invalid characters and try again' : null;
};

export const validateEmail = (value: string) => {
  return validateMinLength(3, 'Email')(value) || validateEmailFormat(value);
};
