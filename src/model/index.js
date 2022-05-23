import Sequelize from 'sequelize';
import comments from './entity/comment.js';
import keywordSubscribers from './entity/keywordSubscriber.js';
import posts from './entity/post.js';
import replies from './entity/reply.js';

const useLogging = process.env.NODE_ENV !== 'development' ? console.log : false;

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.HOST,
    dialect: 'mysql',
    logging: useLogging,
  },
);

const db = {
  sequelize,
  Sequelize,
};

initEntity();
associate();

function initEntity() {
  db.posts = posts(sequelize);
  db.comments = comments(sequelize);
  db.replies = replies(sequelize);
  db.keywordSubscribers = keywordSubscribers(sequelize);
}

function associate() {
  Object.keys(db).forEach((modelName) => {
    if ('associate' in db[modelName]) {
      db[modelName].associate(db);
    }
  });
}

async function sequelizeSync() {
  await db.sequelize.sync();
}

export { db, sequelizeSync };
