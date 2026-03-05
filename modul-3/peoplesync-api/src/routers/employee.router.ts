import { Router } from "express";
import * as controller from "../controllers/employee.controller";

const router = Router();

router.get("/", controller.getEmployees);
router.get("/:id", controller.getEmployee);
router.post("/", controller.createEmployee);
router.put("/:id", controller.updateEmployee);
router.delete("/:id", controller.deleteEmployee);

export default router;
