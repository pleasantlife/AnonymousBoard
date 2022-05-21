import db from '../sequelizeLoader.js';

const { Posts } = db;

export default {
  async paginatedPosts(limit = 10, offset = 0) {
    return await Posts.findAndCountAll({ limit, offset });
  },

  async findByPostId(id) {
    return await Posts.findByPk(id);
  },

  async findWithWhere(condition) {
    const includeCondition = Object.assign(condition, { include: [{ model: db.Comments }] });
    return await Posts.findAndCountAll(includeCondition);
  },

  async createNew(data) {
    return await Posts.create(data);
  },

  async updateOne(data) {
    return await Posts.update(data.updateData, { where: data.where });
  },

  async deleteOne(condition) {
    return await Posts.destroy(condition);
  },
};
