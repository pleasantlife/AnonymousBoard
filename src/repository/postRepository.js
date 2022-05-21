import { db } from '../model/index.js';

const { posts, comments } = db;

export default {
  async paginatedPosts(limit = 10, offset = 0) {
    return await posts.findAndCountAll({ limit, offset, include: [{ model: comments }] });
  },

  async findByPostId(id) {
    return await posts.findByPk(id);
  },

  async findWithWhere(condition) {
    const includeCondition = Object.assign(condition, { include: [{ model: comments }] });
    return await posts.findAndCountAll(includeCondition);
  },

  async createNew(data) {
    return await posts.create(data);
  },

  async updateOne(data) {
    return await posts.update(data.updateData, { where: data.where });
  },

  async deleteOne(condition) {
    return await posts.destroy(condition);
  },
};
