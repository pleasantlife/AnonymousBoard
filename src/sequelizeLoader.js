import 'dotenv/config';
import { Sequelize } from 'sequelize';
import Comments from './model/comment.js';
import Posts from './model/post.js';

const sequelizeInit = new Sequelize({
  dialect: 'mysql',
  host: process.env.HOST,
  username: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  port: process.env.SQL_PORT,
  database: process.env.SQL_SCHEMA,
});

const db = {
  sequelize: sequelizeInit,
  Sequelize,
};

db.Post = Posts(sequelizeInit);
db.Comment = Comments(sequelizeInit);

export default db;
