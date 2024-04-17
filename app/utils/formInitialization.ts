interface ConfigItem {
  field: string;
  validate?: (value: string) => string | null;
}

export const generateInitialValues = (config: ConfigItem[]): Record<string, string> => {
  const initialValues: Record<string, string> = {};

  config.forEach(item => {
    initialValues[item.field] = '';
  });
  return initialValues;
}

export const generateValidationRules = (config: ConfigItem[]): Record<string, ((value: string) => string | null) | undefined> => {
  const validationRules: Record<string, ((value: string) => string | null) | undefined> = {};
  
  config.forEach(item => {
    validationRules[item.field] = item.validate;
  });
  return validationRules;
}
