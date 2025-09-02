import { env } from '@your-org/config';
import { drizzle } from 'drizzle-orm/bun-sql';

export const db = drizzle(env.DATABASE_URL);
