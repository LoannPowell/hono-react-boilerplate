import { Hono } from "hono";
import { auth } from "../../../lib/auth";
 
export const authRoutes = new Hono()
 .on(["POST", "GET"], "/**", (c) => auth.handler(c.req.raw));
 