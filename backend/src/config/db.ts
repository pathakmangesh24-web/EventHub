import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: process.env.localhost!,
  user: process.env.root!,
  password: process.env.NewPassword123!,
  database: process.env.eventhub!,
  port: Number(3306),
});

export default db;