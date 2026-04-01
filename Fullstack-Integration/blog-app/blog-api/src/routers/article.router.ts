import { Router } from "express";
import * as articleController from "../controllers/article.controller";

const router = Router();

router.get("/", articleController.getArticles);
router.get("/:id", articleController.getArticleDetail);
router.post("/", articleController.createArticle);
router.put("/:id", articleController.updateArticle);
router.delete("/:id", articleController.deleteArticle);

export default router;
