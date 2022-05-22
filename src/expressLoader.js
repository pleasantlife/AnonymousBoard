import cors from 'cors';
import express from 'express';
import validator from './middleware/validator.js';
import commentRouter from './router/commentRouter.js';
import postRouter from './router/postRouter.js';
import swaggerRouter from './router/swaggerRouter.js';

export default function loadExpress() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(validator.sanitizeParam);
  app.use('/post', postRouter);
  app.use('/comment', commentRouter);
  app.use('/api-docs', swaggerRouter);
  app.get('/health', (req, res) => {
    res.status(200).json({ status: 'alive!' });
  });
  return app;
}
