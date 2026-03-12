import { prisma } from "../config/prisma";

export async function getProducts(params?: {
  search?: string;
  category?: string;
}) {
  const { search, category } = params || {};

  return prisma.product.findMany({
    where: {
      deleted_at: null,

      // filter by category menggunakan prisma
      ...(category && { category }),

      // search by title or description menggunakan prisma
      // insensitive -> macbook, Macbook, MACBOOK (hasilnya sama)
      ...(search && {
        OR: [
          {
            title: {
              contains: search,
              mode: "insensitive",
            },
            description: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      }),
    },
    orderBy: {
      created_at: "desc",
    },
  });
}

export async function getProductById(id: number) {
  return prisma.product.findUnique({
    where: {
      id,
      deleted_at: null,
    },
  });
}
