import { Router } from "express";
import { addPostValidator, deletePostValidator, updatePostValidator } from "../middlewares/postValidator.js";
import { addPost, deletePost, updatePost } from "./post.controller.js";

const router = Router();

router.post("/addPost", addPostValidator, addPost);
router.put("/updatePost/:id", updatePostValidator, updatePost);
router.delete("/deletePost/:id", deletePostValidator, deletePost);

export default router;