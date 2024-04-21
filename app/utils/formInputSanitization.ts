export const ALLOWED_COMMON_CHARS = '\\p{Letter}0-9 ,.\\-&\\[\\]()';

/**
 * Removes empty strings from an array.
 * @param {string[]} array - Array to filter.
 * @returns {string[]} Filtered array with non-empty strings.
 */
export const removeEmptyItems = (array: string[]): string[] => {
  return array.length ? array.filter((item) => item.length > 0) : [];
};

/**
 * Trims and replaces multiple whitespace characters with a single space.
 * @param {string} input - The string to process.
 * @returns {string} The processed string.
 */
export const removeExtraWhiteSpaces = (input: string):string => {
  return input.trim().replace(/\s+/g, ' ');
};

/**
 * Removes characters that are not allowed from a string.
 * @param {string} text - The string to sanitize.
 * @returns {string} The sanitized string.
 */
export const removeSpecialCharacters = (
  text: string
): string => {
  const allowedCharsRegex = new RegExp(`[^${ALLOWED_COMMON_CHARS}]`, 'gu');
  return text.replace(allowedCharsRegex, '').trim();
};

/**
 * Splits a string by commas, cleans it of unwanted characters, and removes empty items.
 * @param {string | null | undefined} input - The input string to process.
 * @returns {string[]} Array of processed strings.
 */
export const parseAndCleanInput = (
  input: string | null | undefined
): string[] => {
  const parsedInput = input?.split(',') ?? [];
  return removeEmptyItems(
    parsedInput.map((item) => removeSpecialCharacters(item))
  );
};
