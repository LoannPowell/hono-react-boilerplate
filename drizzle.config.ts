import { defineConfig } from 'drizzle-kit';
import { env } from './src/server/lib/env';

export default defineConfig({
  schema: "./src/server/db/schema.ts",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});