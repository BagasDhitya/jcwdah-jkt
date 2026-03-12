import { NextFunction, Request, Response } from "express";
import { Prisma } from "../../generated/prisma/client";
import { AppError } from "../utils/app-error";

export function errorMiddleware(
  err: unknown,
  _: Request,
  res: Response,
  next: NextFunction,
) {
  // error general
  if (err instanceof AppError) {
    return res.status(err.statusCode!).send({
      message: err.message,
    });
  }

  // error dari prisma client
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    return res.status(400).send({
      message: "database error",
      code: err.code,
    });
  }

  // error dari prisma validasi
  if (err instanceof Prisma.PrismaClientValidationError) {
    return res.status(400).send({
      message: "validation error",
    });
  }

  return res.status(500).send({
    message: "Internal server error",
  });
}
