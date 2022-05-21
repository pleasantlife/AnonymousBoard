import 'dotenv/config';
import createSchema from './createSchema.js';
import loadExpress from './expressLoader.js';
import { sequelizeSync } from './model/index.js';

const app = loadExpress();
const port = process.env.PORT;

async function init() {
  if (process.env.NODE_ENV !== 'production') {
    await createSchema();
    await sequelizeSync();
  }
  app.listen(port, () => {
    console.log(`Server running on ::: ${port}`);
  });
}

init();
