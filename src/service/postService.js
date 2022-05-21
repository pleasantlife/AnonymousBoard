import postRepository from '../repository/postRepository.js';

export default {
  async getAllPosts() {
    return await postRepository.findAll();
  },

  async getOnePost(conditionObject) {
    return await postRepository.findOne(conditionObject);
  },

  async getItemsByUserId(userId) {
    return await postRepository.findWithWhere({ id: userId });
  },

  async getItemsByUserName(userName) {
    return await postRepository.findWithWhere({ name: userName });
  },
};
