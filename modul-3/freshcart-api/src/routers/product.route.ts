import { Router } from "express";
import {
  getProducts,
  getProductById,
  createProduct,
} from "../controllers/product.controller";
import { requestLogger } from "../middlewares/request-logger.middleware";

const router = Router();

router.get("/", requestLogger, getProducts);
router.get("/:id", requestLogger, getProductById);
router.post("/", requestLogger, createProduct);

export default router;
