import { Request, Response, NextFunction } from "express";
import * as articleService from "../services/article.service";

export const getArticles = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await articleService.getArticles();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const getArticleDetail = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = Number(req.params.id);
    const data = await articleService.getArticleById(id);

    if (!data) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const createArticle = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await articleService.createArticle(req.body);
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
};

export const updateArticle = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = Number(req.params.id);
    const data = await articleService.updateArticle(id, req.body);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const deleteArticle = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = Number(req.params.id);
    await articleService.deleteArticle(id);
    res.json({ message: "Article deleted" });
  } catch (err) {
    next(err);
  }
};
