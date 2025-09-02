import { Hono } from 'hono';
import { type AuthType, auth } from '../../lib/auth';

export const authRoutes = new Hono<{ Bindings: AuthType }>({
  strict: false,
}).on(['POST', 'GET', 'OPTIONS'], '/**', (c) => {
  console.log('Auth route accessed:', c.req.method, c.req.path);
  return auth.handler(c.req.raw);
});
