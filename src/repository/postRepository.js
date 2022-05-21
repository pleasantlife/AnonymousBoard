import db from '../sequelizeLoader.js';

const { Post } = db;

export default {
  async paginatedPosts(limit = 10, offset = 0) {
    return await Post.findAndCountAll({ limit, offset });
  },

  async findWithWhere(condition) {
    return await Post.findAndCountAll(condition);
  },

  async createNew(data) {
    return await Post.create(data);
  },
};
