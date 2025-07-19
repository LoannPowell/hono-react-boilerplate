import { Hono } from "hono";
import { db } from "../../db";
import { user, session, account, verification } from "../../db/schema";

export const healthRoutes = new Hono()

.get('/', async (c) => {
  const data = await db.select().from(verification);
  const userData = await db.select().from(user);
  console.log(data);
  console.log(userData);
  return c.json({ message: 'API is healthy' });
});