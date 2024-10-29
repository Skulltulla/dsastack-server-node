import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/pg/schema.drizzle.ts',
  out: './dist/db/pg/drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.PG_CONNECTION_STRING!
  },
});