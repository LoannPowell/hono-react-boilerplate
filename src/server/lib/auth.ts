import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { user, session, account, verification } from '../db/schema';
import { betterAuth } from 'better-auth';
import { db } from '../db';
import { env } from "./env";
import { resend } from './email';
import { generateEmailHTML } from '../utils/email-component';

export const auth =  betterAuth({
    database: drizzleAdapter(db, { provider: 'pg', schema: {
        user,
        session,
        account,
        verification,
    }}),
    baseURL: env.BETTER_AUTH_URL,
    secret: env.BETTER_AUTH_SECRET,
    emailAndPassword: {  
        enabled: true,
        requireEmailVerification: true,
        sendResetPassword: async ({user, url, token}) => {
            console.log('URL:', url);
            if (token) console.log('Token:', token);
            console.log('user', user.email);

            const html = generateEmailHTML({
                link: url,
                type: 'password-reset',
                userName: user.name
            });
           
           /*await resend.emails.send({
                from: 'noreply@transanctional.optioo.io',
                to: user.email,
                subject: 'Reset your password',
                html: html,
                text: `Hello ${user.name}, We received a request to reset your password. Please visit this link to reset your password: ${url}`,
            });*/
        }
    },
    trustedOrigins: ['http://localhost:5173'],
    session: { 
        cookieCache: {
        enabled: true,
        maxAge: 5 * 60 
    }},
    emailVerification: {
        sendOnSignUp: true,
        autoSignInAfterVerification: true,
        sendVerificationEmail: async ({user, url}) => { 
            const html = generateEmailHTML({
                link: url,
                type: 'email-verification',
                userName: user.name
            });
            
            await resend.emails.send({
                from: 'noreply@transanctional.optioo.io',
                to: user.email,
                subject: 'Verify your email',
                html: html,
                text: `Hello ${user.name}, Please verify your email address by visiting this link: ${url}`,
            }); 

        }
    },
});
 

export type AuthType = {
    user: typeof auth.$Infer.Session.user | null
    session: typeof auth.$Infer.Session.session | null
}
