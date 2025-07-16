import { Hono } from "hono";

export const healthRoutes = new Hono()

.get('/', (c) => {
  return c.json({ message: 'API is healthy' });
});