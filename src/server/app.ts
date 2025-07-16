import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { healthRoutes } from './routes/health';
import { aiRoutes } from './routes/ai';
import { authRoutes } from './routes/auth';
import { serveStatic } from 'hono/bun';

const app = new Hono();

app.use('*', logger())

const apiRoutes = app.basePath('/api')
      .route('/health',healthRoutes)
      .route('/ai', aiRoutes)
      .route('/auth', authRoutes)

app.get('*', serveStatic({ root: '/frontend/dist' }))
app.get('*', serveStatic({ path: './frontend/dist/index.html' }))
export default app;

export type ApiRoutes = typeof apiRoutes;
