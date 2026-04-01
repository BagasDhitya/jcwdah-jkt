import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { prisma } from "./utils/prisma";
import articleRouter from "./routers/article.router";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/articles", articleRouter);

// 🔥 Test koneksi database saat server start
async function testDatabaseConnection() {
  try {
    await prisma.$connect();
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1); // stop app kalau DB gagal
  }
}

// Endpoint test (optional)
app.get("/health", async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.status(200).json({
      status: "OK",
      database: "connected",
    });
  } catch (error) {
    res.status(500).json({
      status: "ERROR",
      database: "disconnected",
    });
  }
});

// Start server setelah koneksi berhasil
async function startServer() {
  await testDatabaseConnection();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}

startServer();
