import db from '../sequelizeLoader.js';

const { Post } = db;

export default {
  async findOne(condition) {
    return await Post.findOne({ where: condition });
  },

  async findAll() {
    return await Post.findAll();
  },

  async findWithWhere(whereObject) {
    return await Post.find({ where: whereObject });
  },

  async createPost(createObject) {
    return await Post.create(createObject);
  },
};
