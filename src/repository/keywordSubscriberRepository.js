import Sequelize from 'sequelize';
import { db } from '../model/index.js';

const { keywordSubscribers } = db;
export default {
  async findSubscriberByKeyword(keywords) {
    return await keywordSubscribers.findAll({
      where: {
        keywords: {
          [Sequelize.Op.regexp]: keywords,
        },
      },
    });
  },
};
