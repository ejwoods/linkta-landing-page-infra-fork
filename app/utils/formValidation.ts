export const validateMinLength = (minLength: number, field: string) => (value: string) => {
  return value.length < minLength ? `${field} must have at least ${minLength} letters. Please try again.` : null;
}

export const validateEmail = (value: string) => {
  return /^\S+@\S+\.\S+$/.test(value) ? null : 'Invalid email format. Please enter a valid email address.';
}
