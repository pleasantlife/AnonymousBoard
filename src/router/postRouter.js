import express from 'express';
import postController from '../controller/postController.js';

const postRouter = express.Router();

postRouter.get('/', postController.findPosts);
postRouter.post('/create', postController.createPost);

export default postRouter;
