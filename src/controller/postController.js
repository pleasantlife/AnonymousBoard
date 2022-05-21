import _ from 'lodash';
import postService from '../service/postService.js';
import crypto from '../util/crypto.js';

export default {
  async getPostById(req, res) {
    try {
      const result = await postService.findByPostById(Number(req.params.id));
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  async getPosts(req, res) {
    try {
      let result;
      if (_.isNil(req.query.type) || _.isNil(req.query.keyword)) {
        result = await postService.getPaginatedPosts(req.query.limit, req.query.page);
      } else {
        result = await postService.getFindPosts(
          req.query.type,
          req.query.keyword,
          req.query.limit,
          req.query.page,
        );
      }
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  async createPost(req, res) {
    try {
      const { title, body, author, password } = req.body;
      const result = await postService.createPost(title, body, author, password);
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  async updatePost(req, res) {
    try {
      const targetPost = await postService.findByPostById(req.params.id);
      if (crypto.encodingSHA256(req.body.password) !== targetPost.password) {
        res.status(403).json({ message: 'wrong password' });
        return;
      }
      const updateData = _.pick(req.body, ['title', 'body', 'author', 'password']);
      await postService.updatePostById(req.params.id, updateData);
      res.status(200).json({ message: 'success' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  async deletePost(req, res) {
    try {
      const targetPost = await postService.findByPostById(req.params.id);
      if (crypto.encodingSHA256(req.body.password) !== targetPost.password) {
        res.status(403).json({ message: 'wrong password' });
        return;
      }
      await postService.deletePostById(req.params.id);
      res.status(200).json({ message: 'success' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};
