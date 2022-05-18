import express from 'express';
import userRouter from './router/userRouter.js';

export default function loadExpress() {
  const app = express();
  app.use('/user', userRouter);
  app.get('/health', (req, res) => {
    res.status(200).json({ status: 'alive!' });
  });
  return app;
}
