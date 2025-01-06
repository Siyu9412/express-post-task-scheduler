import { IDataValidatorReturnType } from "../@types";

/**
 * To validate the request body's data is array and all the ids are unique
 * @param data The data array of the request body
 */
export function dataValidator(data: any): IDataValidatorReturnType {
  if (data instanceof Array) {
    const idSet = new Set();
    for (const item of data) {
      if (item?.id && item?.value) {
        idSet.add(item.id);
      } else {
        return {
          isValid: false,
          error:
            "Request body's data field items' are not consisting of id and value",
        };
      }
    }
    if (idSet.size === data.length) {
      return { isValid: true };
    } else {
      return {
        isValid: false,
        error: "Request body's data field items' id are not unique",
      };
    }
  }
  return { isValid: false, error: "Request body's data field is not Array" };
}
