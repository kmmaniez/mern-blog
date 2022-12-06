import express from 'express'
import { addPost } from '../controllers/postController.js';

const router = express.Router()

router.get("/ea", addPost)

export default router;