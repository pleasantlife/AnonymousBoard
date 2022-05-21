import _ from 'lodash';
import replyService from '../service/replyService.js';

export default {
  async createReply(req, res) {
    try {
      const data = _.pick(req.body, ['body', 'author', 'parentId']);
      await replyService.createReply(data);
      res.status(201).json({ message: 'success!' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};
