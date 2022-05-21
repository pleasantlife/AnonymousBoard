import { DataTypes } from 'sequelize';

const Comments = (sequelize) => {
  return sequelize.define(
    'comment',
    {
      body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      createdAt: true,
    },
  );
};

export default Comments;
