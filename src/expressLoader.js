import express from 'express';
import postRouter from './router/postRouter.js';

export default function loadExpress() {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/post', postRouter);
  app.get('/health', (req, res) => {
    res.status(200).json({ status: 'alive!' });
  });
  return app;
}
