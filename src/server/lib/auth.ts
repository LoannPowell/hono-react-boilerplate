import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { user, session, account } from '../db/schema';
import { betterAuth } from 'better-auth';
import { db } from '../db';

export const auth =  betterAuth({
    database: drizzleAdapter(db, { provider: 'pg', schema: {
        user,
        session,
        account,
    }}),
    baseURL: process.env.BETTER_AUTH_URL,
    secret: process.env.BETTER_AUTH_SECRET,
    emailAndPassword: {  
        enabled: true
    },
    trustedOrigins: ['http://localhost:5173'],
});

export type AuthType = {
    user: typeof auth.$Infer.Session.user | null
    session: typeof auth.$Infer.Session.session | null
}