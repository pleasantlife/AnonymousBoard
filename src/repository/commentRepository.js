import { db } from '../model/index.js';

const { comments, replies } = db;

export default {
  async paginatedComments(limit = 10, offset = 0) {
    return await comments.findAndCountAll({ limit, offset });
  },

  async commentsByPostId(postId, limit = 10, offset = 0) {
    return await comments.findAndCountAll({
      where: { postId },
      limit,
      offset,
      include: [{ model: replies }],
    });
  },

  async createNew(data) {
    return await comments.create(data);
  },

  // async updateOne(data) {
  //   return await comments.update(data.updateData, { where: data.where });
  // },

  // async deleteOne(condition) {
  //   return await comments.destroy(condition);
  // },
};
