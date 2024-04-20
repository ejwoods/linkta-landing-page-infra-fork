import { FormValues } from "../schemas/userInputSchema";

export type ValidationFunction = (
  value: string
) => string | null ;

export interface ConfigItem {
  field: keyof FormValues;
  validate?: ValidationFunction;
}

export interface TextInputConfig extends ConfigItem {
  label: string;
  placeholder: string;
  required: boolean;
}
