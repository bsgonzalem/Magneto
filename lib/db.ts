import mysql from "mysql2/promise"; // A library to connect MySQL with Next.js

const pool = mysql.createPool({ // keeps the connecition open
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export default pool;