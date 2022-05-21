import _ from 'lodash';
import commentService from '../service/commentService.js';

export default {
  async getComments(req, res) {
    try {
      let result;
      if (_.isNil(req.query.type) || _.isNil(req.query.postid)) {
        result = await commentService.getPaginatedComments(req.query.limit, req.query.page);
      } else {
        result = await commentService.getCommentsByPostId(
          req.query.postid,
          req.query.limit,
          req.query.page,
        );
      }
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  async createComment(req, res) {
    try {
      const data = _.pick(req.body, ['body', 'author', 'postId']);
      await commentService.createComment(data);
      res.status(201).json({ message: 'success' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};
