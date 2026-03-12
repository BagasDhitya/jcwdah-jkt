import { Request, Response } from "express";
import * as productService from "../services/product.service";
import { AppError } from "../utils/app-error";

export async function getProducts(req: Request, res: Response) {
  const { search, category } = req.query;

  let products = await productService.getProducts({
    search: search ? String(search) : undefined,
    category: category ? String(category) : undefined,
  });

  res.status(200).send({
    message: "success",
    data: products,
  });
}

export async function getProductById(req: Request, res: Response) {
  const { id } = req.params;
  const product = await productService.getProductById(Number(id));

  if (!product) {
    throw new AppError("product not found", 404);
  }

  res.status(200).send({
    message: "success",
    data: product,
  });
}
