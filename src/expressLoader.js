import cors from 'cors';
import express from 'express';
import commentRouter from './router/commentRouter.js';
import postRouter from './router/postRouter.js';

export default function loadExpress() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/post', postRouter);
  app.use('/comment', commentRouter);
  app.get('/health', (req, res) => {
    res.status(200).json({ status: 'alive!' });
  });
  return app;
}
