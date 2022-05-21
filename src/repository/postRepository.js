import { db } from '../model/index.js';

const { posts, comments, replies } = db;
const include = [{ model: comments, include: [{ model: replies }] }];

export default {
  async paginatedPosts(limit = 10, offset = 0) {
    return await posts.findAndCountAll({ limit, offset, include });
  },

  async findByPostId(id) {
    return await posts.findByPk(id, {
      include,
    });
  },

  async findWithWhere(condition) {
    const includeCondition = Object.assign(condition, { include });
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
