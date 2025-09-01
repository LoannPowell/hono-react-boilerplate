import { drizzle } from 'drizzle-orm/bun-sql';
import { env } from "@optioo/config";

export const db = drizzle(env.DATABASE_URL);


