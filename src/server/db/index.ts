import { drizzle } from 'drizzle-orm/bun-sql';

export const db = drizzle(process.env.DATABASE_URL!);


