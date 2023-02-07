import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: "assignment",
  })
  .promise();

export async function getUser(email, password) {
  const [rows] = await pool.query(
    `
    SELECT user.email, user.password
    FROM user
    WHERE email = ? && password = ?
    `,
    [email, password]
  );
  return rows;
}

export async function getEmail(email) {
  const [rows] = await pool.query(
    `
    SELECT *
    FROM user
    WHERE email = ?
    `,
    [email]
  );
  return rows;
}

export async function createUser(email, password) {
  const result = await pool.query(
    `
    INSERT INTO user (email,password)
    VALUES(?,?)
    `,
    [email, password]
  );
}
