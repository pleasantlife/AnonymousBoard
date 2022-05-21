import _ from 'lodash';
import postService from '../service/postService.js';

export default {
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
      res.status(500).json({ status: 500, message: err.message });
    }
  },

  async createPost(req, res) {
    const { title, body, author, password } = req.body;
    await postService.createPost(title, body, author, password);
    res.status(201).json({ status: 201, message: 'success' });
  },
};
