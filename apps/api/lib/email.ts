import { Resend } from 'resend';
import { env } from '@optioo/config';

export const resend = new Resend(env.RESEND_API_KEY);

