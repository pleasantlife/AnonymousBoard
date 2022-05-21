import Sequelize from 'sequelize';
import postRepository from '../repository/postRepository.js';

export default {
  async getPaginatedPosts(limit, offset) {
    return await postRepository.paginatedPosts(limit, offset);
  },

  async getFindPosts(type, keyword, limit = 10, offset = 0) {
    return await postRepository.findWithWhere({
      where: {
        [type]: {
          [Sequelize.Op.like]: `%${keyword}%`,
        },
      },
      limit,
      offset,
    });
  },

  async createPost(title, body, author, password) {
    return await postRepository.createNew({
      title,
      body,
      author,
      password,
    });
  },
};
