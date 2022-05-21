import Sequelize from 'sequelize';
import comments from './entity/comment.js';
import posts from './entity/post.js';

const sequelize = new Sequelize(
  process.env.SQL_DB_NAME,
  process.env.SQL_USER,
  process.env.SQL_PASSWORD,
  {
    host: process.env.HOST,
    dialect: 'mysql',
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
