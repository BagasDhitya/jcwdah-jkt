import express, { Application } from "express";
import { pool } from "./config/pool";
import employeeRouter from "./routers/employee.router";

const PORT = 5000;
const app: Application = express();

async function startServer() {
  try {
    await pool.query("SELECT 1");
    console.log("✅ Database connected");

    app.use(express.json()); // middleware json parse

    // list endpoint:
    app.use("/api/employees", employeeRouter);

    app.listen(PORT, () => {
      console.log("Server running at http://localhost:" + PORT);
    });
  } catch (error) {
    console.error("Failed to connect database");
    console.error(error);

    process.exit(); // stop app kalau koneksi ke DB gagal
  }
}

startServer();
