import { Application } from "express";
import { prisma } from "./config/prisma";
import express from "express";

import { productRouter } from "./routers/product.route";
import { errorMiddleware } from "./middlewares/error.middleware";

const PORT = 5000;
const app: Application = express();

async function startServer() {
  try {
    await prisma.$connect();
    console.log("✅ Database connected");

    app.use("/api/products", productRouter);

    // error middleware harus ditaruh di paling dibawah setelah semua fitur
    app.use(errorMiddleware);

    app.listen(PORT, () => {
      console.log("Server running on port: " + PORT);
    });
  } catch (error) {
    console.error("Failed to connect database");
    console.error(error);
    process.exit(1);
  }
}

startServer();
