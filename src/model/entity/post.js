import { DataTypes } from 'sequelize';
import crypto from '../../util/crypto.js';

export default (sequelize) => {
  const posts = sequelize.define(
    'posts',
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
        type: DataTypes.STRING,
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
      underscored: true,
      timestamps: true,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    },
  );
  posts.associate = (models) => {
    posts.hasMany(models.comments, {
      foreignKey: 'post_id',
      onDelete: 'cascade',
    });
  };
  return posts;
};
