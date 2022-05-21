import { db } from '../model/index.js';

const { replies } = db;

export default {
  async createNew(data) {
    return await replies.create(data);
  },
};
