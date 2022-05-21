import express from 'express';
import commentController from '../controller/commentController.js';

const commentRouter = express.Router();

commentRouter.get('/', commentController.getComments);
commentRouter.post('/create', commentController.createComment);

export default commentRouter;
