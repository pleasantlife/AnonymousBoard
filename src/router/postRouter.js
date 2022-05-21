import express from 'express';
import postController from '../controller/postController.js';

const postRouter = express.Router();

postRouter.get('/', postController.getPosts);
postRouter.post('/create', postController.createPost);
postRouter.get('/:id', postController.getPostById);
postRouter.put('/:id', postController.updatePost);
postRouter.delete('/:id', postController.deletePost);
export default postRouter;
