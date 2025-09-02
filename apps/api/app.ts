import { Hono } from 'hono';
import { serveStatic } from 'hono/bun';
import { logger } from 'hono/logger';
import { auth } from './lib/auth';
import { aiRoutes } from './routes/ai';
import { authRoutes } from './routes/auth';
import { healthRoutes } from './routes/health';

const app = new Hono();

app.use('*', logger());
app.use('*', async (c, next) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  if (!session) {
    c.set('user', null);
    c.set('session', null);
    return next();
  }
  c.set('user', session.user);
  c.set('session', session.session);
  return next();
});

const apiRoutes = app
  .basePath('/api')
  .route('/health', healthRoutes)
  .route('/ai', aiRoutes)
  .route('/auth', authRoutes);

app.use('/assets/*', serveStatic({ root: '/app/_static' }));
app.get('/', serveStatic({ path: '/app/_static/index.html' }));
app.get('*', async (c) => c.html(await Bun.file('/app/_static/index.html').text()));

export default app;
export type ApiRoutes = typeof apiRoutes;
