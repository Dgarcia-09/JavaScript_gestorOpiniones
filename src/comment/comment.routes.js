import { Router } from "express";
import { addCommentValidator,updateCommentValidator, deleteCommentValidator } from "../middlewares/commentValidator.js";
import { addComment, updateComment, deleteComment } from "./comment.controller.js";

const router = Router();

/**
 * @swagger
 * /post/{id}/addComment:
 *   post:
 *     summary: Add a new comment to a post
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the post
 *       - in: body
 *         name: comment
 *         description: The comment to create
 *         schema:
 *           type: object
 *           required:
 *             - text
 *           properties:
 *             text:
 *               type: string
 *     responses:
 *       200:
 *         description: Comment created successfully
 *       500:
 *         description: Error creating the comment
 *     security:
 *       - bearerAuth: []
 *     roles: [ADMIN_ROLE, USER_ROLE]
 */
router.post("/post/:id/addComment", addCommentValidator, addComment);

/**
 * @swagger
 * /updateComment/{id}:
 *   patch:
 *     summary: Update an existing comment
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the comment
 *       - in: body
 *         name: comment
 *         description: The comment to update
 *         schema:
 *           type: object
 *           required:
 *             - text
 *           properties:
 *             text:
 *               type: string
 *     responses:
 *       200:
 *         description: Comment updated successfully
 *       404:
 *         description: Comment not found
 *       500:
 *         description: Error updating the comment
 *     security:
 *       - bearerAuth: []
 *     roles: [ADMIN_ROLE, USER_ROLE]
 */
router.patch("/updateComment/:id", updateCommentValidator, updateComment);

/**
 * @swagger
 * /deleteComment/{id}:
 *   delete:
 *     summary: Delete a comment
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the comment
 *     responses:
 *       200:
 *         description: Comment deleted successfully
 *       404:
 *         description: Comment not found
 *       500:
 *         description: Error deleting the comment
 *     security:
 *       - bearerAuth: []
 *     roles: [ADMIN_ROLE, USER_ROLE]
 */
router.delete("/deleteComment/:id", deleteCommentValidator, deleteComment);

export default router;