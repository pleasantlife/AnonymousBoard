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
    },
    {
      underscored: true,
      timestamps: true,
      createdAt: true,
      updatedAt: false,
    },
  );
  comments.associate = (models) => {
    comments.belongsTo(models.posts, { foreignKey: 'post_id', onDelete: 'cascade' });
    comments.hasMany(models.replies, { foreignKey: 'parent_id', onDelete: 'cascade' });
  };

  return comments;
};
