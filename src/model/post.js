import { DataTypes } from 'sequelize';
import crypto from '../util/crypto.js';

const Posts = (sequelize) => {
  return sequelize.define(
    'post',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      author: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
          this.setDataValue('password', crypto.encodingSHA256(value));
        },
      },
    },
    {
      sequelize,
      timestamps: true,
    },
  );
};

export default Posts;
