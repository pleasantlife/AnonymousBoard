import express from 'express';
import commentController from '../controller/commentController.js';
import replyController from '../controller/replyController.js';

const commentRouter = express.Router();

commentRouter.get('/', commentController.getComments);
commentRouter.post('/create', commentController.createComment);
commentRouter.post('/reply', replyController.createReply);

export default commentRouter;
