import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { betterAuth } from 'better-auth';
import { db } from '../server/db';

export const auth =  betterAuth({
    database: drizzleAdapter(db, { provider: 'pg' }),
    baseURL: process.env.BETTER_AUTH_URL,
    secret: process.env.BETTER_AUTH_SECRET,
    emailAndPassword: {  
        enabled: true
    },
});
