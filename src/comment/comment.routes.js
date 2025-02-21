import { Router } from "express";
import { addCommentValidator,updateCommentValidator, deleteCommentValidator } from "../middlewares/commentValidator.js";
import { addComment, updateComment, deleteComment } from "./comment.controller.js";

const router = Router();

router.post("/post/:id/addComment", addCommentValidator, addComment);

router.patch("/updateComment/:id", updateCommentValidator, updateComment);

router.delete("/deleteComment/:id", deleteCommentValidator, deleteComment);

export default router;