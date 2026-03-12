import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT: number = 5000;

app.use(express.json());

app.get("/", (_: Request, res: Response) => {
  res.send("Warehouse API running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
