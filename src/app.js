import 'dotenv/config';
import loadExpress from './expressLoader.js';
import db from './sequelizeLoader.js';

const app = loadExpress();
const port = process.env.PORT;
const { sequelize } = db;

async function init() {
  await sequelize.query(
    `CREATE SCHEMA IF NOT EXISTS ${process.env.SQL_SCHEMA} DEFAULT CHARACTER SET utf8mb4;`,
  );
  await sequelize.sync();

  app.listen(port, () => {
    console.log(`Server running on ::: ${port}`);
  });
}

init();
