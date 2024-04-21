/**
 * Regex disallowing characters other than letters from any language, numbers, spaces,
 * commas, periods, hyphens, square brackets, and parentheses.
 */
const allowedCharsRegex = new RegExp(`[^\\p{Letter}0-9 ,.\\-&\\[\\]()]`, 'gu');

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
export const removeExtraWhiteSpaces = (input: string): string => {
  return input.trim().replace(/\s+/g, ' ');
};

/**
 * Removes characters not allowed from a string & extra white spaces.
 * @param {string} text - The string to sanitize and optimize whitespace.
 * @param {RegExp} allowedRegex - The regex pattern used to determine allowed characters. Defaults to allowedCharsRegex.
 * @returns {string} The sanitized and whitespace-optimized string.
 */
export const sanitizeAndTrimText = (
  text: string,
  allowedRegex: RegExp = allowedCharsRegex
): string => {
  const sanitizedText = text.replace(allowedRegex, ' ');
  return removeExtraWhiteSpaces(sanitizedText);
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
  return removeEmptyItems(parsedInput.map((item) => sanitizeAndTrimText(item)));
};
