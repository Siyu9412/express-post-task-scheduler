import dayjs from "dayjs";
import { ITimeConvertorReturnType } from "../@types";

/**
 * To validate and convert a date string into various formats
 * @param executeTime for example: "2024-12-30 17:00:00"
 * @param compareCurrentTime If it's true, if the executeTime before current time will make returned field isValid as false
 */
export function timeConvertor(
  executeTime: string,
  compareCurrentTime: boolean = true
): ITimeConvertorReturnType {
  const invalidReturnObject = {
    isValid: false,
    error: "",
    dayjsObject: undefined,
    formattedTime: undefined,
  };

  try {
    const _executeTime = dayjs(executeTime);
    if (compareCurrentTime && _executeTime.isBefore(dayjs())) {
      invalidReturnObject.error = "Execute time is before current time";
      return invalidReturnObject;
    }
    return {
      isValid: true,
      dayjsObject: _executeTime,
      formattedTime: _executeTime.format("YYYY-MM-DD HH:mm:ss"),
    };
  } catch {
    invalidReturnObject.error = `Incorrect time format: ${executeTime}`;
    return invalidReturnObject;
  }
}
