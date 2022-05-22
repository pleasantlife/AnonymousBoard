import commentRepository from '../repository/commentRepository.js';
import paginationUtil from '../util/paginationUtil.js';
import keywordSubscriberService from './keywordSubscriberService.js';

export default {
  async getPaginatedComments(limit = 10, page = 0) {
    const { currentPage, offset } = paginationUtil.paginationValues(limit, page);
    const data = await commentRepository.paginatedComments(limit, offset);
    return paginationUtil.paginatedData(data, currentPage, limit);
  },

  async getCommentsByPostId(postId, limit = 10, page = 0) {
    const { currentPage, offset } = paginationUtil.paginationValues(limit, page);
    const data = await commentRepository.commentsByPostId(postId, limit, offset);
    return paginationUtil.paginatedData(data, currentPage, limit);
  },

  async createComment(data) {
    await commentRepository.createNew(data);
    await keywordSubscriberService.sendKeywordAlarm(data.body);
  },
};
