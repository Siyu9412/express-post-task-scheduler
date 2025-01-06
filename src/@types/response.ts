import { Response } from "express";
import { StatusCodes } from "http-status-codes";

export type IResponse = {
  code: StatusCodes;
  message?: string;
  data?: any;
  error?: any;
};

export interface IExtendResponse extends Response<any> {
  jr: (res: IResponse) => void;
}
