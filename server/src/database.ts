import { Pool } from "pg";

export const pool = new Pool({
  user: 'admin',
  host: "127.0.0.1",
  password: 'PRIVET',
  database: 'tt',
  port: 5432
});
