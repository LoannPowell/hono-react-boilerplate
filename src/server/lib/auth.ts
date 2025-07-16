import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { user, session, account } from '../db/schema';
import { betterAuth } from 'better-auth';
import { db } from '../db';
import { createMiddleware } from 'hono/factory';
import { env } from "./env";

export const auth =  betterAuth({
    database: drizzleAdapter(db, { provider: 'pg', schema: {
        user,
        session,
        account,
    }}),
    baseURL: env.BETTER_AUTH_URL,
    secret: env.BETTER_AUTH_SECRET,
    emailAndPassword: {  
        enabled: true
    },
    trustedOrigins: ['http://localhost:5173'],
    session: { 
        cookieCache: {
        enabled: true,
        maxAge: 5 * 60 
    }},
});
 

export const getSession = async (req: Request) => {
    const session = await auth.api.getSession({
            headers: req.headers
    })
    return session
}

export const sessionMiddleware = () => createMiddleware(async (c, next) => {
        const session =  await auth.api.getSession({
            headers: c.req.raw.headers
        });
        c.set('user', session?.user ?? null);
        c.set('session', session?.session ?? null);
        await next();
});

export type AuthType = {
    user: typeof auth.$Infer.Session.user | null
    session: typeof auth.$Infer.Session.session | null
}
