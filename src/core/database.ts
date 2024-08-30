import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from '../config';

// check is database connection uri config or not
if(DB_HOST === undefined){
  throw new Error("core.database: DB_HOST is undefined (import  from ../config.ts)")
}

// open connection
const client = postgres({
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

export const db = drizzle(client);