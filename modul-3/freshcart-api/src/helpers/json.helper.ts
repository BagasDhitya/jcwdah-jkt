import fs from "fs";
import path from "path";
import { Product } from "../dto/product.dto";

const dataPath = path.join(__dirname, "../data/products.json");

export function readProducts() {
  const file = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(file) as Product[];
}

export function writeProduct(data: Product[]) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}
