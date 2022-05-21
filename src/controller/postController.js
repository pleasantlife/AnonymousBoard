import postRepository from '../repository/postRepository.js';

export default {
  async getAllPosts(req, res) {
    const result = await postRepository.findAll();
    return res.status(200).json(result);
  },

  async createPost(req, res) {
    const data = {
      title: req.body.title,
      body: req.body.body,
      author: req.body.author,
      password: req.body.password,
    };
    await postRepository.createPost(data);
    return res.status(201).json({ message: 'success' });
  },
};
