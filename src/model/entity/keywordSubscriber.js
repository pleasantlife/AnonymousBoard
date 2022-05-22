import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const keywordSubscribers = sequelize.define(
    'keywordSubscribers',
    {
      keywords: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      subscriber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'keyword_subscribers',
      underscored: true,
      timestamps: true,
      charset: 'utf8mb4',
    },
  );

  return keywordSubscribers;
};
