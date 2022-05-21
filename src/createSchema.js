import 'dotenv/config';
import mysql from 'mysql2/promise';

export default async function createSchema() {
  const connection = await mysql.createConnection({
    host: process.env.HOST,
    port: process.env.SQL_PORT,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
  });
  await connection.query(
    `CREATE DATABASE IF NOT EXISTS ${process.env.SQL_DB_NAME} DEFAULT CHARACTER SET utf8mb4;`,
  );
  await connection.close();
}
