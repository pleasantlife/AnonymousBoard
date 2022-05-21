/* eslint-disable no-underscore-dangle */

import 'dotenv/config';
import express from 'express';
import basicAuth from 'express-basic-auth';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import { fileURLToPath } from 'url';
import YAML from 'yamljs';

const swaggerRouter = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('fileName::', __filename);
console.log('dirname::', __dirname);

const swaggerDoc = YAML.load(path.join(__dirname, '../swagger.yaml'));

swaggerRouter.use(
  '/',
  basicAuth({ users: { admin: process.env.SWAGGER_PASSWORD }, challenge: true }),
  swaggerUi.serve,
  swaggerUi.setup(swaggerDoc),
);

export default swaggerRouter;
