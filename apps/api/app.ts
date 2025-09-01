import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { healthRoutes } from './routes/health';
import { aiRoutes } from './routes/ai';
import { authRoutes } from './routes/auth';
import { serveStatic } from 'hono/bun';
import { auth } from './lib/auth';

const app = new Hono();

app.use('*', logger())
app.use("*", async (c, next) => {
	const session = await auth.api.getSession({ headers: c.req.raw.headers });
 
  	if (!session) {
    	c.set("user", null);
    	c.set("session", null);
    	return next();
  	}
 
  	c.set("user", session.user);
  	c.set("session", session.session);
  	return next();
});

const apiRoutes = app.basePath('/api')
      .route('/health',healthRoutes)
      .route('/ai', aiRoutes)
      .route('/auth', authRoutes)

app.get('*', serveStatic({ root: '/frontend/dist' }))
app.get('*', serveStatic({ path: './frontend/dist/index.html' }))
export default app;

export type ApiRoutes = typeof apiRoutes;
