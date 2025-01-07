import { Request, Response, NextFunction } from "express";
import { IExtendResponse } from "../@types/response";
import { StatusCodes } from "http-status-codes";

/**
 * Validate the secret string from request header
 */
export function secretGuard(req: Request, _res: Response, next: NextFunction) {
  const res = _res as IExtendResponse;
  const requestSecret = req.headers.secret;
  if (requestSecret === process.env.SCEDULER_SECRET) {
    next();
  } else {
    res.jr({
      code: StatusCodes.UNAUTHORIZED,
      error: "Invalid Secret",
    });
  }
}
