import _ from 'lodash';
import postService from '../service/postService.js';
import crypto from '../util/crypto.js';

export default {
  async findPost(req, res) {
    try {
      const result = await postService.findByPostById(req.params.id);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  async findPosts(req, res) {
    try {
      let result;
      if (_.isNil(req.query.type) || _.isNil(req.query.keyword)) {
        result = await postService.getPaginatedPosts(req.query.limit, req.query.offset);
      } else {
        result = await postService.getFindPosts(
          req.query.type,
          req.query.keyword,
          req.query.limit,
          req.query.offset,
        );
      }
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  async createPost(req, res) {
    const { title, body, author, password } = req.body;
    const result = await postService.createPost(title, body, author, password);
    res.status(201).json(result);
  },

  async updatePost(req, res) {
    const targetPost = await postService.findByPostById(req.params.id);
    if (crypto.encodingSHA256(req.body.password) !== targetPost.password) {
      return res.status(403).json({ message: 'wrong password' });
    }
    const updateData = _.pick(req.body, ['title', 'body', 'author', 'password']);
    await postService.updatePost(req.params.id, updateData);
    return res.status(200).json({ message: 'success' });
  },

  async deletePost(req, res) {
    try {
      await postService.deletePostById(req.params.id);
      res.status(200).json({ message: 'success' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};
