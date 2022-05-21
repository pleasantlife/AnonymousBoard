import { DataTypes } from 'sequelize';

const Comments = (sequelize) => {
  return sequelize.define(
    'comment',
    {
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: true,
    },
  );
};

export default Comments;
