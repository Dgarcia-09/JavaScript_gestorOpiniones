import { Router } from "express"
import { updatePassword, updateUser} from "./user.controller.js"
import { updatePasswordValidator, updateUserValidator} from "../middlewares/userValidator.js"

const router = Router()

/**
 * @swagger
 * /updatePassword/{uid}:
 *   patch:
 *     summary: Update user password
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *       - in: body
 *         name: body
 *         required: true
 *         description: Old and new password
 *         schema:
 *           type: object
 *           properties:
 *             oldPassword:
 *               type: string
 *             newPassword:
 *               type: string
 *     responses:
 *       200:
 *         description: Password updated successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 *     security:
 *       - bearerAuth: []
 *     roles: [ADMIN_ROLE, USER_ROLE]
 */
router.patch("/updatePassword/:uid", updatePasswordValidator, updatePassword)

/**
 * @swagger
 * /updateUser/{uid}:
 *   put:
 *     summary: Update user information
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *       - in: body
 *         name: body
 *         required: true
 *         description: User data to update
 *         schema:
 *           type: object
 *           properties:
 *             username:
 *               type: string
 *             email:
 *               type: string
 *     responses:
 *       200:
 *         description: User updated successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 *     security:
 *       - bearerAuth: []
 *     roles: [ADMIN_ROLE, USER_ROLE]
 */
router.put("/updateUser/:uid", updateUserValidator, updateUser)

export default router