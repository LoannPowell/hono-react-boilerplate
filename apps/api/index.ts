import app from './app';
import type { AuthType } from './lib/auth';

declare module 'hono' {
  interface ContextVariableMap {
    user?: AuthType['user'];
    session?: AuthType['session'];
  }
}

const port = Number(process.env.PORT ?? 3000);

const server = Bun.serve({
  fetch: app.fetch,
  port: port,
  hostname: '0.0.0.0',
});

console.log(`Server running at http://${server.hostname}:${server.port}/`);
