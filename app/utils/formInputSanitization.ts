/**
 * Regex disallowing characters other than letters from any language, numbers, spaces,
 * commas, periods, hyphens, square brackets, and parentheses.
 */
const allowedCharsRegex = new RegExp(`[^\\p{Letter}0-9 ,.\\-&\\[\\]()]`, 'gu');

/**
 * Trims and replaces multiple whitespace characters with a single space.
 * @param {string} input - The string to process.
 * @returns {string} The processed string.
 */
export const removeExtraWhiteSpaces = (input: string): string => {
  return input.trim().replace(/\s+/g, ' ');
};

/**
 * Replaces characters not allowed by the provided regex
 *
 * @param {string} text - The string to be sanitized.
 * @param {RegExp} allowedRegex - A regex pattern that defines characters to retain. 
 * @returns {string} The sanitized string with disallowed characters replaced by spaces.
 */
export const sanitizeText = (
  text: string,
  allowedRegex: RegExp = allowedCharsRegex
): string => {
  return text.replace(allowedRegex, ' ');
};

/**
 * Cleans a string by removing special characters and extra white spaces
 *
 * @param {string} text - The string to sanitize and trim.
 * @returns {string} The fully sanitized and whitespace-optimized string.
 */
export const sanitizeAndTrimText = (text: string): string => {
  const sanitizedText = sanitizeText(text);
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
  if (!input) return [];

  return input
    .split(',')
    .map((item) => sanitizeAndTrimText(item))
    .filter((item) => item.length > 0);
};
