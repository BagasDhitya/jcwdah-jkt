import { Prisma } from "../../generated/prisma/client";

export const handlePrismaError = (err: unknown): never => {
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      case "P2002":
        throw new Error("Duplicate data");
      case "P2025":
        throw new Error("Data not found");
      default:
        throw new Error(`Database error: ${err.code}`);
    }
  }

  if (err instanceof Prisma.PrismaClientValidationError) {
    throw new Error("Invalid input data");
  }

  throw err;
};
