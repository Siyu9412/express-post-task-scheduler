import { Dayjs } from "dayjs";

export type ITimeConvertorReturnType = {
  isValid: boolean;
  error?: string;
  dayjsObject: Dayjs | undefined;
  formattedTime: string | undefined;
};

export type IDataValidatorReturnType = {
  isValid: boolean;
  error?: string;
};
