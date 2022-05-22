import Sequelize from 'sequelize';
import postRepository from '../repository/postRepository.js';
import paginationUtil from '../util/paginationUtil.js';
import keywordSubscriberService from './keywordSubscriberService.js';

export default {
  async getPaginatedPosts(limit = 10, page = 0) {
    const { currentPage, offset } = paginationUtil.paginationValues(limit, page);
    const data = await postRepository.paginatedPosts(limit, offset);
    return paginationUtil.paginatedData(data, currentPage, limit);
  },

  async getFindPosts(type, keyword, limit = 10, page = 0) {
    const { currentPage, offset } = paginationUtil.paginationValues(limit, page);
    const data = await postRepository.findWithWhere({
      where: {
        [type]: {
          [Sequelize.Op.like]: `%${keyword}%`,
        },
      },
      limit,
      offset,
    });
    return paginationUtil.paginatedData(data, currentPage, limit);
  },

  async createPost(title, body, author, password) {
    const result = await postRepository.createNew({
      title,
      body,
      author,
      password,
    });
    await keywordSubscriberService.sendKeywordAlarm(body);
    return result;
  },

  async findPostById(postId) {
    return await postRepository.findByPostId(postId);
  },

  async updatePostById(postId, updateData) {
    const data = {
      updateData,
      where: { id: postId },
    };
    return await postRepository.updateOne(data);
  },

  async deletePostById(postId) {
    const condition = {
      where: { id: postId },
    };
    return await postRepository.deleteOne(condition);
  },
};
