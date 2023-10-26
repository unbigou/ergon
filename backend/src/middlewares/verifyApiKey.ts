import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";
import { HttpError } from "../errors/HttpError";
import config from "../config/config";

export function verifyApiKey(req: Request, _: Response, next: NextFunction) {
  const apiKey = req.header("x-api-key")
  if (!apiKey) {
    throw new AppError("API Key is missing", HttpError.UNAUTHORIZED)
  }

  if (apiKey !== config.api.key) {
    throw new AppError("Invalid API Key", HttpError.UNAUTHORIZED)
  }

  next()
}