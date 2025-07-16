import { drizzle } from 'drizzle-orm/bun-sql';
import { env } from "../lib/env";

export const db = drizzle(env.DATABASE_URL);


