import type {
  ConfigItem,
  FormValues,
  ValidationFunction,
} from '../types/signupForm';

/**
 * Generates initial form values based on the provided config.
 * @param {ConfigItem[]} config - Array of ConfigItem objects.
 * @returns {FormValues} Object with field names as keys and empty strings as values.
 */
export const generateInitialValues = (config: ConfigItem[]): FormValues => {
  return config.reduce((initialValues, item) => {
    initialValues[item.field] = '';
    return initialValues;
  }, {} as FormValues);
};

/**
 * Generates validation rules based on the provided config.
 * @param {ConfigItem[]} config - Array of ConfigItem objects.
 * @returns {Record<keyof FormValues, ValidationFunction | undefined>} Object with field names as mantine keys and validation functions as values.
 */
export const generateValidationRules = (
  config: ConfigItem[]
): Record<keyof FormValues, ValidationFunction | undefined> => {
  return config.reduce(
    (validationRules, item) => {
      validationRules[item.field] = item.validate ?? undefined;
      return validationRules;
    },
    {} as Record<keyof FormValues, ValidationFunction | undefined>
  );
};
