export type ValidationFunction = (
  value: string
) => string | null ;

export interface FormValues {
  name: string;
  email: string;
  interests: string;
  source: string;
  features: string;
}

export interface ConfigItem {
  field: keyof FormValues;
  validate: ValidationFunction;
}

export interface TextInputConfig extends ConfigItem {
  label: string;
  placeholder: string;
  required: boolean;
  maxLength: number;
}
