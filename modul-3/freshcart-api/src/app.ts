import express, { Express } from "express";
import ProductRouter from "./routers/product.route";

const PORT = 5000;
const app: Express = express();

app.use(express.json());
app.use("/api/products", ProductRouter);

app.listen(PORT, () => {
  console.log("Server running on http://localhost:", PORT);
});
