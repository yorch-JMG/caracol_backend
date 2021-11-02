import { createPool } from "mysql2/promise";
import * as dotenv from "dotenv";
dotenv.config();

export function connect() {
  createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PWD,
      database: process.env.DB_NAME,
  })
}

