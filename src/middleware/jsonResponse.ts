import { Request, Response, NextFunction } from "express";
import { IResponse } from "../@types/response";

/**
 * Standardize the response format, it should be used with IExtendResponse
 */
export function jsonResponse(req: Request, res: Response, next: NextFunction) {
  Object.defineProperty(res, "jr", {
    value: (response: IResponse) => {
      res.json(response);
    },
    enumerable: true,
  });
  next();
}
