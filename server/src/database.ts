import { Pool } from "pg";

export const pool = new Pool({
  user: 'postgres',
  host: "127.0.0.1",
  password: '',
  database: 'testtask',
  port: 5432,
});
