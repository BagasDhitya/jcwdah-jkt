import { Request, Response } from "express";
import { readProducts, writeProduct } from "../helpers/json.helper";
import { Product } from "../dto/product.dto";

// get all products
// item.deleted_at == null -> mengambil semua data yang tidak tersoft delete
export function getProducts(req: Request, res: Response) {
  const { search, category } = req.query;
  let products = readProducts();
  let data = products.filter((item: Product) => item.deleted_at === null);

  // search by title or description
  // bisa search berdasarkan title OR description
  if (search) {
    const keyword = String(search).toLowerCase();
    data = data.filter(
      (item: Product) =>
        item.title.toLowerCase().includes(keyword) ||
        item.description.toLowerCase().includes(keyword),
    );
  }

  // filter by category
  if (category) {
    data = data.filter(
      (item: Product) =>
        item.category.toLowerCase() === String(category).toLowerCase(),
    );
  }

  res.status(200).send({
    status: res.statusCode,
    data: data,
  });
}

// get by id product
export function getProductById(req: Request, res: Response) {
  const { id } = req.params;
  const products = readProducts();
  const product = products.find((item: Product) => item.id === Number(id));

  if (!product) {
    return res.status(404).send({
      message: "Product not found",
    });
  }

  res.status(200).send({
    status: res.statusCode,
    data: product,
  });
}

// create product
// ...req.body (rest parameter untuk body request)
// kelemahan dari ...req.body -> tidak bisa divalidasi, berpotensi menimbulkan error kalau tidak cocok
export function createProduct(req: Request, res: Response) {
  const products = readProducts();

  const newProduct: Product = {
    id: products.length ? products[products.length - 1].id + 1 : 1,
    ...req.body,
    created_at: new Date().toLocaleString(),
    updated_at: new Date().toLocaleString(),
    deleted_at: null,
  };

  products.push(newProduct);
  writeProduct(products);

  res.status(200).send({
    message: "Success create product",
  });
}
