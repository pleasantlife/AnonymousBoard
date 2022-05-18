import express from 'express';

const userRouter = express.Router();

export function healthCheck() {
  userRouter.get('/', (req, res) => {
    res.status(200).json({ message: 'hello world!' });
  });
}

export function logout() {
  userRouter.get('/logout', (req, res) => {
    res.status(200).json({ message: 'Logout!' });
  });
}

export default userRouter;
