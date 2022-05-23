import 'dotenv/config';
import mysql from 'mysql2/promise';

export default async function createSchema() {
  const connection = await mysql.createConnection({
    host: process.env.HOST,
    port: process.env.SQL_PORT,
    user: process.env.MYSQL_ROOT_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
  });
  await connection.query(
    `CREATE DATABASE IF NOT EXISTS ${process.env.MYSQL_DATABASE} DEFAULT CHARACTER SET utf8mb4;`,
  );
  await connection.close();
}
