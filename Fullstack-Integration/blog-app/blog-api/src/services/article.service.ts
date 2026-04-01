import { prisma } from "../utils/prisma";
import { CreateArticleInput, UpdateArticleInput } from "../types/article.type";
import { handlePrismaError } from "../helpers/prisma.helper";

export const getArticles = async () => {
  return prisma.article.findMany({
    orderBy: { createdAt: "desc" },
  });
};

export const getArticleById = async (id: number) => {
  const article = await prisma.article.findUnique({
    where: { id },
  });

  if (!article) {
    throw new Error("Article not found");
  }

  return article;
};

export const createArticle = async (payload: CreateArticleInput) => {
  try {
    return await prisma.article.create({
      data: payload,
    });
  } catch (err) {
    handlePrismaError(err);
  }
};

export const updateArticle = async (
  id: number,
  payload: UpdateArticleInput,
) => {
  try {
    return await prisma.article.update({
      where: { id },
      data: payload,
    });
  } catch (err) {
    handlePrismaError(err);
  }
};

export const deleteArticle = async (id: number) => {
  try {
    return await prisma.article.delete({
      where: { id },
    });
  } catch (err) {
    handlePrismaError(err);
  }
};
