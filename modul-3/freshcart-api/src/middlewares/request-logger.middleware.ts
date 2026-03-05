import { Request, Response, NextFunction } from "express";

export function requestLogger(req: Request, res: Response, next: NextFunction) {
  const startTime = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - startTime;
    const date = new Date().toLocaleString();

    console.log(`[${date}] ${req.method} ${req.originalUrl} - ${duration} ms`);
  });

  next();
}
