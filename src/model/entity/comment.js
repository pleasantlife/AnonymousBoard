import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const comments = sequelize.define(
    'comments',
    {
      body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      parentId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sequence: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'comments',
      underscored: true,
      createdAt: true,
    },
  );
  comments.associate = (models) => {
    comments.belongsTo(models.posts, { foreignKey: 'post_id' });
  };

  return comments;
};
