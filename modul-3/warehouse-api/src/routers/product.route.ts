import { Router } from "express";
import * as productController from "../controllers/product.controller";

export const productRouter = Router();

productRouter.get("/", productController.getProducts);
productRouter.get("/:id", productController.getProductById);
