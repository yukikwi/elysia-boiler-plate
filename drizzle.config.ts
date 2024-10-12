import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: [
    './src/**/models.ts',
    './src/**/models/*.ts'
  ],
  out: './database_migrations',
  dialect: 'postgresql',
  dbCredentials: {
    host: process.env.DB_HOST as string,
    port: parseInt(process.env.DB_PORT || "5432"),
    user: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME as string,
    ssl: false
  },
});