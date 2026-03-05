export interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
  stock: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}
