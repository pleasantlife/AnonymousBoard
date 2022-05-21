import express from 'express';
import postController from '../controller/postController.js';

const postRouter = express.Router();

postRouter.get('/', postController.getAllPosts);

postRouter.post('/create', postController.createPost);

postRouter.get('/one', async (req, res) => {
  try {
    const result = await postController.getOnePost();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

export default postRouter;
