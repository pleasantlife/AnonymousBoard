import express from 'express';
import postController from '../controller/postController.js';

const postRouter = express.Router();

postRouter.get('/', postController.getPosts);
postRouter.post('/create', postController.createPost);
postRouter
  .route('/:id')
  .get(postController.getPostById)
  .put(postController.updatePost)
  .delete(postController.deletePost);

export default postRouter;
