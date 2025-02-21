import { Router } from "express";
import { addCategory, deleteCategory, getCategory, updateCategory } from "./category.controller.js";
import { addCategoryValidator, deleteCategoryValidator, updateCategoryValidator } from "../middlewares/categoryValidator.js";

const router = Router();

/**
 * @swagger
 * /addCategory:
 *   post:
 *     summary: Add a new category
 *     tags: [Category]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the category
 *                 example: "Technology"
 *     responses:
 *       200:
 *         description: Category added successfully
 *       400:
 *         description: The category already exists
 *       500:
 *         description: Error adding the category
 */
router.post("/addCategory", addCategoryValidator, addCategory);

/**
 * @swagger
 * /updateCategory/{id}:
 *   patch:
 *     summary: Update an existing category
 *     tags: [Category]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The category ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The new name of the category
 *                 example: "Science"
 *     responses:
 *       200:
 *         description: Category updated successfully
 *       400:
 *         description: Invalid ID or missing name
 *       404:
 *         description: Category not found
 *       500:
 *         description: Error updating the category
 */
router.patch("/updateCategory/:id", updateCategoryValidator, updateCategory);

/**
 * @swagger
 * /deleteCategory/{id}:
 *   delete:
 *     summary: Delete a category
 *     tags: [Category]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The category ID
 *     responses:
 *       200:
 *         description: Category deleted successfully
 *       404:
 *         description: Category not found
 *       500:
 *         description: Error deleting the category
 */
router.delete("/deleteCategory/:id", deleteCategoryValidator, deleteCategory);

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get a list of categories
 *     tags: [Category]
 *     parameters:
 *       - in: query
 *         name: limite
 *         schema:
 *           type: integer
 *           default: 5
 *         description: The number of categories to return
 *       - in: query
 *         name: desde
 *         schema:
 *           type: integer
 *           default: 0
 *         description: The number of categories to skip
 *     responses:
 *       200:
 *         description: A list of categories
 *       500:
 *         description: Error retrieving categories
 */
router.get("/", getCategory);

export default router;