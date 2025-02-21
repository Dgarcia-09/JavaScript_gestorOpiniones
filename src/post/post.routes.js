import { Router } from "express";
import { addPostValidator, deletePostValidator, updatePostValidator } from "../middlewares/postValidator.js";
import { addPost, deletePost, updatePost } from "./post.controller.js";

const router = Router();

/**
 * @swagger
 * /addPost:
 *   post:
 *     summary: Add a new post
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "My Post Title"
 *               text:
 *                 type: string
 *                 example: "This is the content of the post"
 *               category:
 *                 type: string
 *                 example: "CategoryName"
 *     responses:
 *       201:
 *         description: Post created successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Internal server error
 */
router.post("/addPost", addPostValidator, addPost);

/**
 * @swagger
 * /updatePost/{id}:
 *   put:
 *     summary: Update an existing post
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The post ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Updated Post Title"
 *               text:
 *                 type: string
 *                 example: "Updated content of the post"
 *     responses:
 *       200:
 *         description: Post updated successfully
 *       400:
 *         description: Validation error
 *       404:
 *         description: Post not found
 *       500:
 *         description: Internal server error
 */
router.put("/updatePost/:id", updatePostValidator, updatePost);

/**
 * @swagger
 * /deletePost/{id}:
 *   delete:
 *     summary: Delete a post
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The post ID
 *     responses:
 *       200:
 *         description: Post deleted successfully
 *       404:
 *         description: Post not found
 *       500:
 *         description: Internal server error
 */
router.delete("/deletePost/:id", deletePostValidator, deletePost);

export default router;