import replyRepository from '../repository/replyRepository.js';

export default {
  async createReply(data) {
    return await replyRepository.createNew(data);
  },
};
