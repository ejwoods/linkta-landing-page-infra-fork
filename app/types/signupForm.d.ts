import { UserDataValidation } from '../schemas/userDataValidationSchema';

export type ValidationFunction = (value: string) => string | null;

export interface ConfigItem {
  field: keyof UserDataValidation;
  validate?: ValidationFunction;
}

export interface TextInputConfig extends ConfigItem {
  label: string;
  required: boolean;
  tooltipLabel?: string;
}
