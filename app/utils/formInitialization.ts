import type { ValidationFunction } from '../types/signupForm';

interface ConfigItem {
  field: string;
  validate?: ValidationFunction;
}

/**
* Generates initial form values based on the provided config.
* @param config - Array of ConfigItem objects.
* @returns Object with field names as keys and empty strings as values.
**/
export const generateInitialValues = (config: ConfigItem[]): Record<string, string> => {
  const initialValues: Record<string, string> = {};

  config.forEach(item => {
    initialValues[item.field] = '';
  });

  return initialValues;
}

/**
* Generates validation rules based on the provided config.
* @param config - Array of ConfigItem objects.
* @returns Object with field names as keys and validation functions as values.
**/
export const generateValidationRules = (config: ConfigItem[]): Record<string, ValidationFunction> => {
  const validationRules: Record<string, ValidationFunction> = {};

  config.forEach(item => {
    if(item.validate){
      validationRules[item.field] = item.validate;
    }
  });

  return validationRules;
}
