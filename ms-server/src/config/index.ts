import dotenv from 'dotenv';

dotenv.config();

export const port = process.env.PORT || '5000';

export const host = process.env.DB_HOST;
export const dbPort = parseInt(
  process.env.POSTGRES_PORT ? process.env.POSTGRES_PORT : '5432',
);
export const password = process.env.POSTGRES_PASSWORD;
export const username = process.env.POSTGRES_USER;
export const database = process.env.POSTGRES_DB;
