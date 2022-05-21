import commentRepository from '../repository/commentRepository.js';
import paginationUtil from '../util/paginationUtil.js';

export default {
  async getPaginatedComments(limit = 10, page = 0) {
    const { currentPage, offset } = paginationUtil.paginationValues(limit, page);
    const data = await commentRepository.paginatedComments(Number(limit), Number(offset));
    return paginationUtil.paginatedData(data, currentPage, limit);
  },

  async getCommentsByPostId(postId, limit = 10, page = 0) {
    const { currentPage, offset } = paginationUtil.paginationValues(limit, page);
    const data = await commentRepository.commentsByPostId(postId, Number(limit), Number(offset));
    return paginationUtil.paginatedData(data, currentPage, limit);
  },

  async createComment(data) {
    return await commentRepository.createNew(data);
  },
};
