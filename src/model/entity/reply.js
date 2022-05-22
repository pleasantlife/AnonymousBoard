import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const reply = sequelize.define(
    'replies',
    {
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      parentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: 'replies',
      underscored: true,
      timestamps: true,
      createdAt: true,
      updatedAt: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    },
  );
  reply.associate = (models) => {
    reply.belongsTo(models.comments, { foreignKey: 'parent_id', onDelete: 'cascade' });
  };

  return reply;
};
