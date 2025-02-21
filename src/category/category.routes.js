import { Router } from "express";
import { addCategory, deleteCategory, getCategory, updateCategory } from "./category.controller.js";
import { addCategoryValidator, deleteCategoryValidator, updateCategoryValidator } from "../middlewares/categoryValidator.js";

const router = Router();

router.post("/addCategory", addCategoryValidator, addCategory);
router.patch("/updateCategory/:id", updateCategoryValidator, updateCategory)
router.delete("/deleteCategory/:id", deleteCategoryValidator, deleteCategory)
router.get("/", getCategory);

export default router;