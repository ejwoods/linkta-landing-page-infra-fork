import type { ValidationFunction } from '../types/signupForm';
interface ConfigItem {
  field: string;
  validate?: ValidationFunction;
}

export const generateInitialValues = (config: ConfigItem[]): Record<string, string> => {
  const initialValues: Record<string, string> = {};

  config.forEach(item => {
    initialValues[item.field] = '';
  });

  return initialValues;
}

export const generateValidationRules = (config: ConfigItem[]): Record<string, ValidationFunction> => {
  const validationRules: Record<string, ValidationFunction> = {};

  config.forEach(item => {
    if(item.validate){
      validationRules[item.field] = item.validate;
    }
  });

  return validationRules;
}
