import express from 'express';
import postController from '../controller/postController.js';

const postRouter = express.Router();

postRouter.get('/', postController.findPosts);
postRouter.post('/create', postController.createPost);
postRouter.get('/:id', postController.findPost);
postRouter.put('/:id', postController.updatePost);
postRouter.delete('/:id', postController.deletePost);
export default postRouter;
